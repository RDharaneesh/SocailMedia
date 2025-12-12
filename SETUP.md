## 🚀 Social Media App - Complete Setup Guide

### Prerequisites
- Node.js (v14+)
- MongoDB (local or cloud)
- npm or yarn

---

## 📦 Installation Steps

### Step 1: Backend Setup

```bash
# Navigate to backend directory
cd Socialmedia/backend

# Install dependencies
npm install

# Start backend server
npm run dev   # (For development with nodemon)
# or
npm start     # (For production)
```

The backend will run on `http://localhost:5000`

### Step 2: Frontend Setup

```bash
# Navigate to frontend directory
cd Socialmedia/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on `http://localhost:5173`

---

## 📋 Database Setup

### Option 1: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Use connection string in `.env`:
   ```
   MONGO_URI=mongodb://localhost:27017/socialmedia
   ```

### Option 2: MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster and database
3. Copy connection string to `.env`:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/socialmedia
   ```

---

## 🎯 Features Overview

### Authentication
- ✅ User Registration
- ✅ User Login
- ✅ Secure session management via localStorage

### Posts
- ✅ Create posts
- ✅ View all posts in feed
- ✅ Like/Unlike posts
- ✅ Delete own posts

### UI/UX
- ✅ Clean and simple design
- ✅ Responsive layout
- ✅ Beautiful gradient colors
- ✅ Smooth transitions

---

## 📁 Project Structure

```
Socialmedia/
├── backend/
│   ├── controllers/
│   │   ├── postController.js    - Post business logic
│   │   └── userController.js    - User business logic
│   ├── models/
│   │   ├── Post.js              - Post schema
│   │   └── User.js              - User schema
│   ├── routes/
│   │   ├── postRoutes.js        - Post endpoints
│   │   └── userRoutes.js        - User endpoints
│   ├── server.js                - Express server
│   ├── .env                     - Environment variables
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Login.jsx        - Login page
    │   │   ├── Register.jsx     - Registration page
    │   │   ├── Feed.jsx         - Posts feed
    │   │   └── AddPost.jsx      - Create post page
    │   ├── services/
    │   │   └── api.js           - API calls
    │   ├── styles/
    │   │   ├── Auth.css         - Auth pages styling
    │   │   ├── Feed.css         - Feed styling
    │   │   └── AddPost.css      - Add post styling
    │   ├── App.jsx              - Main component
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── package.json
    └── vite.config.js
```

---

## 🔌 API Endpoints

### User Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/register` | Register new user |
| POST | `/api/users/login` | Login user |
| GET | `/api/users` | Get all users |

### Post Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/posts/add` | Create post |
| GET | `/api/posts` | Get all posts |
| DELETE | `/api/posts/:id` | Delete post |
| POST | `/api/posts/:id/like` | Like/Unlike post |

---

## 💡 How to Use the App

1. **Start the Application**
   - Open two terminals
   - In one: `cd Socialmedia/backend && npm run dev`
   - In another: `cd Socialmedia/frontend && npm run dev`

2. **Open in Browser**
   - Go to `http://localhost:5173`

3. **Register/Login**
   - Click "Create Account" to register
   - Or login with existing credentials

4. **Use Features**
   - Click "New Post" to create a post
   - Click heart to like posts
   - Click trash to delete your posts
   - Click "Logout" to exit

---

## 🎨 Customization

### Change Colors
Edit gradient colors in CSS files:
- `Auth.css` - Change from `#667eea` to your color
- `Feed.css` - Update button colors

### Change API URL
Edit `frontend/src/services/api.js`:
```javascript
const API_URL = "http://your-backend-url/api";
```

### Change Port
Edit `backend/.env`:
```
PORT=3000  // Change to desired port
```

---

## 🐛 Troubleshooting

### CORS Error
- Make sure backend is running on `http://localhost:5000`
- Check if CORS is enabled in `server.js`

### MongoDB Connection Error
- Verify MongoDB is running
- Check connection string in `.env`
- For Atlas, ensure IP is whitelisted

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000
kill -9 <PID>
```

---

## 📝 Environment Variables

Create `.env` in `backend/` folder:
```
MONGO_URI=mongodb://localhost:27017/socialmedia
PORT=5000
NODE_ENV=development
```

---

## 🚀 Deployment Ready

The project is ready for deployment:
- Frontend: Deploy to Vercel, Netlify, or GitHub Pages
- Backend: Deploy to Heroku, Railway, or AWS

---

## 📚 Next Steps

Future enhancements:
- [ ] Add comments feature
- [ ] User profiles
- [ ] Follow/Unfollow system
- [ ] Image uploads
- [ ] Real-time notifications
- [ ] Search functionality
- [ ] Hashtags
- [ ] JWT authentication

---

**Happy Coding! 🎉**
