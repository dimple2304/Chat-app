# Real-time Chat App

Hi, I'm Dimple from KUK, and this is a real-time chat application I built using Node.js, Express, MongoDB, Socket.IO, and vanilla JavaScript.

This app allows users to sign up with OTP verification, log in securely, and chat in real-time. All messages are stored in MongoDB and instantly synced between users.

---

## Features

- Secure signup with OTP email verification  
- Real-time messaging using Socket.IO  
- Recent chat list with real-time updates  
- Online/offline status and last seen info  
- JWT-based authentication  
- MongoDB for database (with Mongoose)  
- Email sending via Nodemailer (Gmail)  
- Simple, clean, WhatsApp-style UI  

---

## Technologies Used

- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js, Express.js  
- Realtime: Socket.IO  
- Database: MongoDB with Mongoose  
- Authentication: JWT  
- Email: Nodemailer (Gmail SMTP)

---

## Project Structure

Real-time Chat App/
│
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── auth.js
│ ├── chat.js
│ └── index.html
│
├── requirements.txt
└── README.md

---

## Environment Variables

To run this project, create a `.env` file in the `backend/` folder. Use `.env.example` as a template.

PORT=3000
DB_CONNECTION_STRING=your_mongo_connection_string
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_app_password
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d


## How to Run the Project

### 1. Clone or unzip the project

### 2. Navigate into the backend folder
cd backend


### 3. Install dependencies
npm install

### 4. Create the `.env` file
Use `.env.example` as a reference and fill in your own values.

### 5. Start the backend server
npm start


Server will run on `http://localhost:3000`

### 6. Open the frontend
Just open `frontend/index.html` in your browser.

---

## About Me

I'm Dimple, an MCA student at Kurukshetra University (KUK) who enjoys building real-time, full-stack web applications. This project was created to learn and showcase real-time chat functionality.

---

## Contact

Email: 2426mca.dimple@kuk.ac.in

---

## License

This project is for learning and educational purposes.