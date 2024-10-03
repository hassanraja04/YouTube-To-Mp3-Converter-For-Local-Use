# YouTube-To-Mp3-Converter-For-Local-Use

This is a local-use YouTube to MP3 converter that allows you to convert YouTube videos to MP3 files by running the application locally on your machine. The project is split into two parts: a frontend (`client`) and a backend (`server`).

## Project Structure

```bash
YouTube-To-Mp3-Converter-For-Local-Use/
├── client/                # Contains the React frontend code
│   ├── public/            # Public assets
│   ├── src/               # React components and logic
│   └── package.json       # Frontend dependencies
├── server/                # Contains the Express backend code
│   ├── server.js          # Main backend logic for YouTube to MP3 conversion
│   └── package.json       # Backend dependencies
└── README.md              # Documentation
└── .gitignore             # Files ignored by git
```

## Technologies Used

- **Frontend (Client)**: React, Axios
- **Backend (Server)**: Node.js, Express, ytdl-core, yt-dlp-exec, path, fs, cors

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **NPM** (comes with Node.js)

---

## Setup Instructions

### Step 1: Clone the Repository

First, clone this repository to your local machine.

```bash
git clone https://github.com/hassanraja04/YouTube-To-Mp3-Converter-For-Local-Use.git
cd YouTube-To-Mp3-Converter-For-Local-Use 
```

### Step 2: Set Up Backend (Server)

Navigate to the server folder:
```bash
cd server
```

Install the necessary backend dependencies:
```bash
npm install express ytdl-core yt-dlp-exec path fs cors
```

Start the backend server:
```bash
npm start
```

Your backend will now be running on http://localhost:3001.

### Step 3: Set Up Frontend (Client)

Open a new terminal and navigate to the client folder:
```bash
cd client
```

Install the frontend dependencies:
```bash
npm install 
```
and then 
```bash
npm install axios 
```

Start the frontend server:
```bash
npm start
```

This will open the frontend application in your browser at http://localhost:3000.

### Step 4: Running the Application

- **Backend (Server)**: Ensure the backend server is running (use npm start inside the server folder).
- **Frontend (Client)**: Ensure the frontend is running on a separate terminal (use npm start inside the client folder).

### Step 5: Accessing the Application

- Open http://localhost:3000 in your browser.
- Paste the YouTube URL you want to convert into the input box, press "Convert", and download the MP3 file once it's ready.

---

## Features

- Convert YouTube videos to MP3 locally.
- Customize the MP3 file name before downloading.
- No external dependencies for hosting the backend — everything runs locally!

## Troubleshooting

- Ports Conflict: Ensure that nothing is already running on ports 3000 (for frontend) or 3001 (for backend). If you encounter a conflict, change the ports in the respective files.
- Missing Dependencies: If you run into any missing dependencies issues, try running npm install again in both the client and server folders.
- YouTube Link Issues: Make sure the YouTube links are in the correct format (either full URL or shortened version).

---

By following these steps, you can run the YouTube to MP3 converter project locally on your machine!
