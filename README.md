# 🚀 Forever — Full-Stack E-Commerce Web App

> A production-oriented MERN e-commerce application with secure authentication, protected routes, and a scalable backend architecture built on industry best practices.

<p>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-black?style=flat-square&logo=jsonwebtokens" />
</p>

**🔗 Live demo:** [forever-store-app.vercel.app](https://forever-store-app.vercel.app/)

## 🎯 Project Objective

To build a secure, scalable client-server application that:

- Implements JWT-based authentication
- Follows MVC architecture
- Enforces protected routes
- Handles real-world HTTP status codes (400, 401, 500)
- Demonstrates full-stack integration end to end

## 🧠 Technical Highlights

- 🔐 JWT-based authentication & authorization
- 🔑 Password hashing with bcrypt
- 🛡 Middleware-based route protection
- 📦 RESTful API design
- ⚡ Axios for client–server communication
- 🌐 Context API for global state management
- 🧱 Modular folder structure (MVC pattern)
- 🔒 Environment-variable-based configuration
- 📊 Proper HTTP status code handling

## 🖼 Screenshot

<!-- Add a screenshot or GIF of the storefront here -->
`[screenshot placeholder — add a homepage or checkout-flow screenshot]`

## 🏗 System Architecture

```
Client (React)
      ↓  Axios HTTP Requests
Express Server (Node.js)
      ↓  Auth Middleware (JWT Verification)
MongoDB Database (Mongoose ODM)
```

### 🔐 Authentication Flow

1. User registers → password hashed with bcrypt
2. User logs in → server issues a signed JWT
3. Token stored client-side and attached to request headers
4. Backend verifies the JWT signature on protected routes
5. Unauthorized requests return `401 Unauthorized`

## 📂 Project Structure

```
Forever-Ecommerce-WebApp/
├── admin/            # Admin dashboard (React)
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── context/
│   └── App.jsx
└── .gitignore
```

## 📡 API Endpoints

| Method | Endpoint | Access |
|---|---|---|
| POST | `/api/user/register` | Public |
| POST | `/api/user/login` | Public |
| GET | `/api/user/profile` | Protected |

## 🛠 Tech Stack

**Frontend:** React (Hooks), Context API, React Router, Axios, Tailwind CSS
**Backend:** Node.js, Express.js, MongoDB, Mongoose, JSON Web Token, bcrypt, dotenv

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (local instance or Atlas connection string)

### Installation

```bash
# Clone the repo
git clone https://github.com/chirag-jaiswal-git/Forever-Ecommerce-WebApp.git
cd Forever-Ecommerce-WebApp

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Install admin dashboard dependencies
cd ../admin
npm install
```

### Environment Variables

Create a `.env` file inside `backend/` with:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000
```

### Run locally

```bash
# Start the backend (from /backend)
npm start

# Start the frontend (from /frontend, in a new terminal)
npm run dev

# Start the admin panel (from /admin, in a new terminal)
npm run dev
```

## 🛡 Security & Best Practices

- JWT signature validation on every protected route
- Secret keys stored in `.env`, never committed to GitHub
- Password hashing via bcrypt
- Centralized error handling
- Clean Git branching and commit workflow

## ☁️ Deployment

Frontend, backend, and database are all deployment-ready:

- **Frontend:** Vercel
- **Backend:** Vercel
- **Database:** MongoDB Atlas

Environment variables are configured securely for production.

## 📄 License

`[Add a license — MIT is a common choice for personal/portfolio projects]`

## 👤 Author

**Chirag Jaiswal**
[LinkedIn](https://www.linkedin.com/in/chirag-jaiswal18/) · [GitHub](https://github.com/chirag-jaiswal-git)
