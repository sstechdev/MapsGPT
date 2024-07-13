Getting Started
Clone the Repository:
```
git clone https://github.com/sstechdev/MapsGPT.git
```
Install Dependencies:
Navigate to the project root:
```
cd MapsGPT
```
Install server dependencies:
```
cd backend
```
```
npm install
```

Install client dependencies:
```
cd frontend
```
```
npm install
```

Configure Environment Variables:
Create a .env file in the backend directory:
```
cd ../backend
```
```
touch .env
```

Add your MongoDB Atlas URI and server port to config.env:
```
MONGO_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/
PORT=5000
```

Start the Servers:
In one terminal, start the backend server:
```
cd backend
node server.js
```

In another terminal, start the frontend server:
```
cd frontend
npm run dev
```

Access the App:
Open your browser and go to http://localhost:5173 to view the React app in Vite.
The backend API endpoints are available at http://localhost:5000.
