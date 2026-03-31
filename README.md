# 🌍 Wanderlust - Full Stack Travel Listing & Booking App

🚀 Wanderlust is a full-stack travel web application where users can explore listings, create their own stays, and add reviews. It includes authentication, session management, and a dynamic UI using EJS templates.

---

## ✨ Key Features

* 🔐 User Authentication (Signup / Login / Logout using Passport.js)
* 🏨 Create, Edit & Delete Listings
* ⭐ Add & Manage Reviews
* 📸 Upload & Display Images
* 🔔 Flash Messages for user feedback
* 🧑‍💼 Session-based Authentication
* ⚡ Error Handling with custom middleware
* 📱 Responsive UI using EJS + Bootstrap

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### Authentication

* Passport.js (Local Strategy)

### Templating Engine

* EJS + EJS-Mate

### Other Tools

* express-session
* connect-flash
* method-override
* dotenv

---

## 📂 Project Structure

```id="2p6z6y"
wanderlust/
│
├── models/          # Mongoose schemas (User, Listing, Review)
├── routes/          # Route handlers (listing, review, user)
├── utils/           # Custom utilities (ExpressError)
├── views/           # EJS templates
├── public/          # Static files (CSS, JS, images)
├── app.js           # Main server file
├── .env             # Environment variables
├── package.json
```

---

## ⚙️ Environment Variables

Create a `.env` file in root directory:

```id="z2y6ak"
NODE_ENV=development
PORT=3000
MONGO_URL=mongodb://127.0.0.1:27017/wanderlust
SESSION_SECRET=your_secret_key
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository

```bash id="vbdjvb"
git clone https://github.com/your-username/wanderlust-mern.git
cd wanderlust-mern
```

### 2️⃣ Install dependencies

```bash id="8f5y5z"
npm install
```

### 3️⃣ Start MongoDB

Make sure MongoDB is running locally

---

### 4️⃣ Run the server

```bash id="hf6czl"
node app.js
```

👉 App will run on:

```
http://localhost:3000
```

---

## 🔐 Authentication Flow

* Uses Passport.js Local Strategy
* Passwords are hashed securely
* Sessions are stored using express-session
* Flash messages provide login/signup feedback

---

## ⚡ Error Handling

* Custom error class (`ExpressError`)
* Centralized error middleware
* 404 handling for unknown routes

---



## 🌐 Future Improvements

* 💳 Payment Integration (Stripe)
* ☁️ Cloud image storage (Cloudinary)
* 📍 Map integration (Mapbox)
* 💬 Real-time chat system

---

## 👨‍💻 Author

**Nikhil Tiwari**
🔗 GitHub: https://github.com/nikhil-tiwari26

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
