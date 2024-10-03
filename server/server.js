const express = require('express');
const ytdl = require('ytdl-core');
const youtubedl = require('yt-dlp-exec');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));


const cleanYouTubeLink = (link) => {
  return link.split('?')[0]; 
};


let tempFilePath = '';

app.post('/convert', async (req, res) => {
  const { link } = req.body;
  console.log(`Received link: ${link}`);
  const cleanedLink = cleanYouTubeLink(link);

  if (!ytdl.validateURL(cleanedLink)) {
    console.log('Invalid YouTube link');
    return res.status(400).send('Invalid YouTube link');
  }

  
  try {
    const info = await ytdl.getInfo(cleanedLink);
    const title = info.videoDetails.title.replace(/[^a-zA-Z0-9 ]/g, ""); 
    tempFilePath = path.resolve(__dirname, `audio-${Date.now()}.mp3`);

    
    await youtubedl(cleanedLink, {
      output: tempFilePath,
      extractAudio: true,
      audioFormat: 'mp3',
      audioQuality: '128k',
      noPlaylist: true 
    });

    console.log('Conversion finished, sending file to client');
    if (fs.existsSync(tempFilePath)) {
      
      res.json({ path: tempFilePath, title });
    } else {
      console.log('File not found after conversion');
      res.status(500).send('Error: file not found after conversion');
    }
  } catch (error) {
    console.error('youtube-dl error:', error);
    res.status(500).send('Error processing the video');
  }
});

app.get('/download', (req, res) => {
  const { path, filename } = req.query;

  if (!path || !fs.existsSync(path)) {
    return res.status(404).send('File not found');
  }

  res.download(path, filename, (err) => {
    if (err) {
      console.error('Error sending file:', err);
    } else {
      console.log('File sent successfully, deleting local file');
    }

    
    fs.unlink(path, (unlinkErr) => {
      if (unlinkErr) {
        console.error('Error deleting file:', unlinkErr);
      } else {
        tempFilePath = ''; 
      }
    });
  });
});


app.post('/clear', (req, res) => {
  if (tempFilePath && fs.existsSync(tempFilePath)) {
    fs.unlink(tempFilePath, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
        return res.status(500).send('Error clearing the file');
      }
      tempFilePath = ''; 
      console.log('Temporary file cleared successfully');
      res.send('File cleared successfully');
    });
  } else {
    res.send('No file to clear');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});