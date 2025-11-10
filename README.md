🧩 Connectify – Real-Time Video & Chat Platform 📌 Overview Connectify is a full-stack web application that enables seamless real-time communication through video calls, screen sharing, and chat messaging. It’s built using React.js, Node.js, Express, Socket.IO, and MongoDB, providing a modern and scalable communication platform for users to connect securely.

🚀 Features ✅ One-to-one and group video meetings using WebRTC & Socket.IO ✅ Instant chat messaging during video sessions ✅ User authentication (Sign Up / Login) with JWT ✅ Call history tracking for past meetings ✅ Responsive UI built with Material UI ✅ Secure MongoDB Atlas integration using environment variables ✅ Optimized build ready for production deployment

🛠️ Tech Stack LayerTechnologyFrontendReact.js, Material UI, Socket.IO ClientBackendNode.js, Express.js, Socket.IODatabaseMongoDB AtlasAuthenticationJWT (JSON Web Token)DeploymentRender / Netlify / Vercel (recommended)

⚙️ Installation and Setup

1️⃣ Clone the repository git clone https://github.com/TapabrataSengupta/connectify.git cd connectify

2️⃣ Install dependencies

For frontend: cd frontend npm install

For backend: cd backend npm install

3️⃣ Configure Environment Variables Create a .env file inside your backend directory and add: PORT=8000 MONGO_URI=mongodb+srv://:@cluster0.mongodb.net/connectify?retryWrites=true&w=majority JWT_SECRET=your_jwt_secret_here

4️⃣ Run the application Start the backend server: npm start

Start the frontend: npm run start

Your app will be running at 👉 http://localhost:3000

🧠 How It Works

Frontend handles UI and Socket.IO client events (video/chat).

Backend manages signaling via Socket.IO and REST APIs for user data.

MongoDB stores user profiles, chat history, and meeting records.

WebRTC handles peer-to-peer media streaming between users.

🧑‍💻 Developer 👤 Tapabrata Sengupta 📍 Kolkata, West Bengal 🎓 MCA | B.Sc. in Mathematics 💼 Passionate about full-stack development, AI, and real-time systems

🧾 License This project is licensed under the MIT License. You’re free to use, modify, and distribute it with attribution.
