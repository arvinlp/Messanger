# Messanger - Real-Time Chat Application

## 📱 Project Overview

**Messanger** is a full-featured real-time messaging application built with the MERN stack (MongoDB, Express, React, Node.js). It provides a modern chat experience with both individual and group messaging capabilities.

### 🎯 Key Features

- **Real-time Messaging**: Instant message delivery using Socket.io
- **Single & Group Chat**: Create group chats or have one-on-one conversations
- **User Authentication**: Secure login/signup with bcrypt password hashing and JWT tokens
- **User Profiles**: Upload and update your profile picture
- **Notifications**: Real-time notifications for new messages
- **State Management**: Redux for efficient state management and API calls
- **Beautiful UI/UX**: Material-UI components with responsive design
- **MongoDB Database**: Persistent storage with complete Mongoose schemas

### 💡 Technology Stack

**Frontend:**
- React 18
- Redux & Redux Toolkit
- React Router v6
- Socket.io Client
- Material-UI (MUI)
- Vite (Build tool)

**Backend:**
- Node.js & Express
- MongoDB with Mongoose
- Socket.io
- JWT Authentication
- Bcrypt (Password hashing)

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas cloud)

### Step 1: Clone the Repository
```bash
git clone https://github.com/arvinlp/Messanger.git
cd Messanger
```

### Step 2: Backend Setup

1. Navigate to the server folder:
```bash
cd Server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the **Server** folder with the following variables:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_here
SOKET_URL=http://localhost:3000
```

**How to get MongoDB URI:**
- **Local MongoDB**: `mongodb://localhost:27017/messanger`
- **MongoDB Atlas** (Cloud): Create a cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas), then copy your connection string

4. Start the server:
```bash
npm start
```
The server will run on `http://localhost:5001`

### Step 3: Frontend Setup

1. In a new terminal, navigate to the client folder:
```bash
cd Client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
The application will open on `http://localhost:5173`

---

## 🛠️ Running the Application

### Development Mode (Recommended for Personal Use)

**Terminal 1 - Start Backend:**
```bash
cd Server
npm start
# Server runs on port 5001
```

**Terminal 2 - Start Frontend:**
```bash
cd Client
npm run dev
# App runs on http://localhost:5173
```

### Production Build

**For Frontend:**
```bash
cd Client
npm run build
npm run preview
```

---

## 📝 Environment Variables Explained

### Server `.env` file:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5001` |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/messanger` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_random_secret_key` |
| `SOKET_URL` | Frontend URL for Socket.io | `http://localhost:3000` |

---

## 👤 Usage

1. **Sign Up**: Create a new account with email and password
2. **Log In**: Access your account with credentials
3. **Add Friends**: Search for users and start chatting
4. **Create Groups**: Create group chats with multiple users
5. **Share Messages**: Send text messages and see real-time delivery
6. **Upload Profile**: Update your profile picture
7. **Receive Notifications**: Get notified of new messages

---

## 📂 Project Structure

```
Messanger/
├── Client/                 # React Frontend
│   └── src/
│       ├── Components/     # React Components
│       ├── Redux/          # Redux Store & Actions
│       ├── Auth/           # Authentication Components
│       └── ...
├── Server/                 # Node.js Backend
│   ├── config/            # Database Configuration
│   ├── controller/        # Route Controllers
│   ├── model/             # Mongoose Models
│   ├── middleware/        # Authentication & Authorization
│   └── app.js             # Express Server Setup
└── README.md
```

---

## ✨ Credits

This project is based on [yashrajillusion/Messanger](https://github.com/yashrajillusion/Messanger) with additional enhancements including profile uploads, notifications, improved UI/UX, and bug fixes.

---

## 📄 License

See [License.md](License.md) for licensing information.
