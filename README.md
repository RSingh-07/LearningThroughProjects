# 🌍 Real-Time Location Tracking App
**#LearningThroughProjects**

A full-stack real-time location tracking web application built using **Node.js**, **Express**, **Socket.IO**, **Leaflet.js**, and **EJS**. This project allows users to share their live location, which updates dynamically on a map interface.

> 🔧 Inspired by a project tutorial from [Sheriyans Coding School (YouTube)](https://www.youtube.com/@sheriyanscodingschool)

---

## 🚀 Features

- 🌐 Real-time bi-directional communication using **Socket.IO**
- 📍 Live location tracking using the **Geolocation API**
- 🗺️ Interactive map powered by **Leaflet.js** and **OpenStreetMap**
- 👤 Dynamic marker handling (add/update/remove)
- 📱 Fully responsive across screen sizes
- 🛠️ Modular file structure for scalability

---

## 🛠️ Tech Stack

| Frontend     | Backend      | Libraries & Tools          |
|--------------|--------------|-----------------------------|
| HTML, CSS    | Node.js      | Express.js, Socket.IO       |
| JavaScript   | EJS (views)  | Leaflet.js, OpenStreetMap   |

---

## 📂 Folder Structure
project/
├── public/
│ ├── css/
│ │ └── style.css
│ ├── js/
│ │ └── script.js
├── views/
│ └── index.ejs
├── app.js
└── package.json


---

## 🧠 How It Works

1. The client connects to the server via **Socket.IO**
2. Browser's **Geolocation API** starts tracking user’s location
3. The client emits `"send-location"` with updated coordinates
4. The server receives and broadcasts this data to all connected clients
5. On the frontend:
   - Existing marker → position is updated
   - New user → marker is created
6. On disconnect → marker is removed from all clients

---

## 💡 Learning Outcomes

- Implemented real-time communication via **WebSockets**
- Integrated **Geolocation API** with frontend
- Synchronized frontend and backend in real time
- Modularized code in a full-stack JS application

---

## 🔧 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/real-time-tracker.git
cd real-time-tracker
2️⃣ Install Dependencies
bash
npm install
3️⃣ Run the Server
bash
node app.js
✅ Note: Ensure location permission is allowed in your browser
