# 💡 Tips & Tricks - Social Media App

## ⌨️ Development Shortcuts

### Terminal Commands

**Backend:**
```bash
cd Socialmedia/backend

# Install dependencies
npm install

# Run with auto-reload (development)
npm run dev

# Run normally (production)
npm start

# Check if port 5000 is available
netstat -ano | findstr :5000
```

**Frontend:**
```bash
cd Socialmedia/frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm build

# Preview production build
npm preview

# Check if port 5173 is available
netstat -ano | findstr :5173
```

---

## 🎯 Testing the API

### Using Browser Console

**Test Registration:**
```javascript
// Copy & paste in browser console (F12)
fetch('http://localhost:5000/api/users/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    password: 'password123'
  })
}).then(r => r.json()).then(d => console.log(d))
```

**Test Login:**
```javascript
fetch('http://localhost:5000/api/users/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'test@example.com',
    password: 'password123'
  })
}).then(r => r.json()).then(d => console.log(d))
```

**Get All Posts:**
```javascript
fetch('http://localhost:5000/api/posts')
  .then(r => r.json())
  .then(d => console.log(d))
```

---

## 🐛 Common Issues & Solutions

### Issue: Port Already in Use

**Problem:** "Port 5000 already in use"

**Solution:**
```bash
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace 1234 with actual PID)
taskkill /PID 1234 /F

# Or change port in backend/.env
PORT=3000
```

### Issue: MongoDB Connection Error

**Problem:** "MongoDB connection failed"

**Solution:**
1. Check MongoDB is running
2. Verify MONGO_URI in `.env`
3. For Atlas, whitelist your IP
4. Check internet connection

```bash
# Test connection locally
mongosh
```

### Issue: CORS Error

**Problem:** "Access to XMLHttpRequest blocked by CORS"

**Solution:**
- Backend already has CORS enabled
- Make sure frontend runs on `localhost:5173`
- Check API_URL in `frontend/src/services/api.js`

### Issue: Page Won't Load

**Problem:** "Cannot GET /posts"

**Solution:**
1. Make sure backend is running on port 5000
2. Check MongoDB connection
3. Refresh the page
4. Check browser console (F12) for errors

---

## 🎨 Customization Guide

### Change App Colors

**Edit:** `frontend/src/styles/Auth.css`

Find:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Change to:
```css
/* Red gradient */
background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);

/* Green gradient */
background: linear-gradient(135deg, #667eea 0%, #667eea 100%);

/* Orange gradient */
background: linear-gradient(135deg, #f97316 0%, #fb923c 100%);
```

### Change App Font

**Edit:** `frontend/src/index.css`

Find:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

Change to:
```css
/* Modern */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Elegant */
font-family: 'Georgia', serif;

/* Playful */
font-family: 'Comic Sans MS', cursive;
```

### Change App Name

Replace "Social Feed" in:
1. `frontend/src/pages/Feed.jsx` - Line with `<h1>`
2. `README.md` - Project name
3. `SETUP.md` - Title sections

---

## 📱 Testing on Mobile

### Using Chrome DevTools

1. Open Chrome DevTools (F12)
2. Click device toggle icon (top-left)
3. Select "iPhone" or "Pixel"
4. Test the app layout

### Testing on Actual Phone

**Local Network Testing:**
```bash
# Get your computer's IP
ipconfig getifaddr en0   # Mac
ipconfig                 # Windows

# Access from phone
http://[YOUR_IP]:5173
```

---

## 📊 Monitoring & Debugging

### Backend Debugging

**Add Logging:**
```javascript
// In postController.js
exports.getPosts = async (req, res) => {
    console.log("Getting posts..."); // Add this
    const posts = await Post.find().populate("userId");
    console.log("Posts found:", posts.length); // Add this
    res.json(posts);
};
```

**View Logs:**
- Watch terminal where `npm run dev` is running
- All console.log() will appear here

### Frontend Debugging

**Use Browser DevTools (F12):**
- Console tab: See errors
- Network tab: See API calls
- Application tab: Check localStorage
- Components tab: Check React state

---

## 🔍 Code Quality Tips

### Keep Code Simple

✅ **Good:**
```javascript
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await loginUser(email, password);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        goPage("feed");
    } catch (err) {
        setError(err.message);
    }
};
```

❌ **Avoid:**
```javascript
const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser(email, password)
        .then(r => localStorage.setItem("user", JSON.stringify(r.data.user)))
        .then(() => goPage("feed"))
        .catch(e => setError(e.message));
};
```

### Comments

```javascript
// Good comment
// Fetch all posts from database sorted by newest first
const posts = await Post.find().sort({ createdAt: -1 });

// Bad comment
// Get posts
const posts = await Post.find();
```

---

## 📈 Performance Tips

### Reduce API Calls

```javascript
// ❌ Bad: Called every render
useEffect(() => {
    fetchPosts();
}, []); // Missing dependency

// ✅ Good: Called once on mount
useEffect(() => {
    fetchPosts();
}, []); // Empty array = run once
```

### Optimize Database Queries

```javascript
// ❌ Bad: Gets all user data
const posts = await Post.find();

// ✅ Good: Gets only what you need
const posts = await Post.find()
    .select('text likes createdAt')
    .populate('userId', 'name');
```

---

## 🚀 Advanced Features to Add

### 1. Comments
```javascript
// Add to Post model
comments: [{
    userId: ObjectId,
    text: String,
    createdAt: Date
}]
```

### 2. User Follow
```javascript
// Add to User model
followers: [ObjectId],
following: [ObjectId]
```

### 3. Edit Posts
```javascript
// Add route
PUT /api/posts/:id
// Add to controller
exports.updatePost = async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body);
    res.json(post);
};
```

### 4. Search Posts
```javascript
// Add route
GET /api/posts/search?query=hello
// Add to controller
exports.searchPosts = async (req, res) => {
    const posts = await Post.find({
        text: { $regex: req.query.query, $options: 'i' }
    });
    res.json(posts);
};
```

---

## 📝 Git Commands (Version Control)

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# View status
git status

# View log
git log
```

---

## 🎓 Learning Resources

- **React Docs**: https://react.dev
- **Node.js Docs**: https://nodejs.org/docs
- **MongoDB Docs**: https://docs.mongodb.com
- **Express Docs**: https://expressjs.com
- **MDN Web Docs**: https://developer.mozilla.org

---

## 💾 Backup & Recovery

**Backup your code:**
```bash
# Copy entire project to external drive
# Or push to GitHub
git init
git add .
git commit -m "Project backup"
```

**Restore from backup:**
```bash
# Replace corrupted files from backup
# Or clone from GitHub
```

---

## 🎉 Success Checklist

- [ ] Backend running on localhost:5000
- [ ] Frontend running on localhost:5173
- [ ] MongoDB connected
- [ ] Can register new user
- [ ] Can login with credentials
- [ ] Can create posts
- [ ] Can like/unlike posts
- [ ] Can delete own posts
- [ ] Can logout
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] All features working

**When all checked ✅ - You're done! 🎊**

---

## 📞 Quick Reference

| Action | Command |
|--------|---------|
| Start Backend | `npm run dev` (in backend/) |
| Start Frontend | `npm run dev` (in frontend/) |
| Install Deps | `npm install` |
| Build Frontend | `npm build` |
| Check Ports | `netstat -ano \| findstr :PORT` |
| Kill Process | `taskkill /PID {PID} /F` |

---

**You've got this! Happy coding! 🚀**
