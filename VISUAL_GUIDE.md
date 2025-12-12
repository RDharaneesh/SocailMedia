# 📱 Social Media App - Visual Guide

## 🎬 User Flow

```
┌─────────────────────────────────────────────────────────┐
│                    START APP                             │
└────────────────────┬────────────────────────────────────┘
                     │
         ┌───────────┴────────────┐
         │                        │
      ┌──▼──┐                  ┌──▼──┐
      │LOGIN│                  │SIGN │
      │PAGE │                  │UP   │
      └──┬──┘                  └──┬──┘
         │        ┌─────────────┘  │
         │        │                │
         └────────┼────┬───────────┘
                  │    │
              ┌───▼────▼────┐
              │ FEED PAGE   │
              │ (Homepage)  │
              └───┬─────┬───┘
                  │     │
         ┌────────┘     └─────────┐
         │                        │
    ┌────▼─────┐          ┌──────▼─────┐
    │CREATE NEW│          │INTERACT    │
    │POST      │          │WITH POSTS  │
    └────┬─────┘          │- Like      │
         │                │- Delete    │
         │                │- View      │
         │                └──────┬─────┘
         │                       │
         └───────────┬───────────┘
                     │
                 ┌───▼────┐
                 │LOGOUT  │
                 └────────┘
```

---

## 📄 Page Layout

### 1️⃣ Login Page
```
┌──────────────────────────────┐
│                              │
│                              │
│      ┌─────────────────┐     │
│      │     LOGIN       │     │
│      ├─────────────────┤     │
│      │ 📧 Email Input  │     │
│      ├─────────────────┤     │
│      │ 🔒 Password     │     │
│      ├─────────────────┤     │
│      │  [Login Button] │     │
│      │                 │     │
│      │ Register Here → │     │
│      └─────────────────┘     │
│                              │
└──────────────────────────────┘
```

### 2️⃣ Register Page
```
┌──────────────────────────────┐
│                              │
│                              │
│    ┌──────────────────┐      │
│    │CREATE ACCOUNT    │      │
│    ├──────────────────┤      │
│    │ 👤 Name          │      │
│    ├──────────────────┤      │
│    │ 📧 Email         │      │
│    ├──────────────────┤      │
│    │ 🔒 Password      │      │
│    ├──────────────────┤      │
│    │ [Register Button]│      │
│    │                  │      │
│    │ Login Here → │      │
│    └──────────────────┘      │
│                              │
└──────────────────────────────┘
```

### 3️⃣ Feed Page (Main)
```
┌─────────────────────────────────────────┐
│  Social Feed    [+ New Post] [Logout]   │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ John Doe          Jan 15, 2024  │   │
│  ├─────────────────────────────────┤   │
│  │ This is my first post! It's     │   │
│  │ amazing to share thoughts with  │   │
│  │ everyone here!                  │   │
│  ├─────────────────────────────────┤   │
│  │ ❤️ 5 likes      🗑️ Delete       │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Jane Smith        Jan 14, 2024  │   │
│  ├─────────────────────────────────┤   │
│  │ Great day today! Loving every   │   │
│  │ moment!                         │   │
│  ├─────────────────────────────────┤   │
│  │ ❤️ 12 likes                     │   │
│  └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

### 4️⃣ Create Post Page
```
┌──────────────────────────────┐
│                              │
│  Create a New Post           │
│  ────────────────────────    │
│                              │
│  ┌────────────────────────┐  │
│  │ What's on your mind?   │  │
│  │                        │  │
│  │                        │  │
│  │                        │  │
│  └────────────────────────┘  │
│                              │
│  [Post]      [Cancel]        │
│                              │
└──────────────────────────────┘
```

---

## 🔄 Data Flow

```
FRONTEND              BACKEND               DATABASE
────────              ────────              ────────

User Input
   │
   ├─► Register/Login
   │      │
   │      ├─► POST /api/users/register ───► User.create() ───► MongoDB
   │      │
   │      └─► POST /api/users/login ──────► User.findOne() ──► MongoDB
   │
   ├─► View Feed
   │      │
   │      └─► GET /api/posts ────────────► Post.find() ──────► MongoDB
   │                                        (populate userId)
   │
   ├─► Create Post
   │      │
   │      └─► POST /api/posts/add ────────► Post.create() ────► MongoDB
   │
   ├─► Like Post
   │      │
   │      └─► POST /api/posts/:id/like ───► Post.update() ────► MongoDB
   │                                        (push userId to likes)
   │
   └─► Delete Post
          │
          └─► DELETE /api/posts/:id ──────► Post.findByIdAndDelete() ► MongoDB
```

---

## 💾 Database Diagram

```
USERS Collection
┌─────────────────────────────────────┐
│ _id: ObjectId                       │
│ name: String                        │
│ email: String (unique)              │
│ password: String                    │
│ createdAt: Date                     │
│ updatedAt: Date                     │
└─────────────────────────────────────┘
         △
         │ (Referenced by)
         │
POSTS Collection
┌─────────────────────────────────────┐
│ _id: ObjectId                       │
│ userId: ObjectId (ref: User)        │
│ text: String                        │
│ likes: [ObjectId] (ref: Users)      │
│ createdAt: Date                     │
│ updatedAt: Date                     │
└─────────────────────────────────────┘
```

---

## 🎨 Color Scheme

```
Primary Colors:
┌─────────────────────────────────────┐
│ ████████████████ #667eea (Blue)     │
│ ████████████████ #764ba2 (Purple)   │
│ Gradient: Used for buttons & hero   │
└─────────────────────────────────────┘

Secondary Colors:
┌─────────────────────────────────────┐
│ ████ #ff6b6b (Red - Delete)         │
│ ████ #333333 (Text - Dark)          │
│ ████ #f5f5f5 (Background - Light)   │
│ ████ #ffffff (White - Cards)        │
└─────────────────────────────────────┘
```

---

## 📱 Responsive Design

```
Desktop (1200px+)          Mobile (320px)
┌──────────────────────   ┌────────┐
│ Social Feed              │ Feed   │
│ [+ New] [Logout]        │ [+][L] │
├──────────────────────   ├────────┤
│                         │        │
│  ┌───────────────────┐  │┌──────┐│
│  │ User Name    Date │  ││User  ││
│  │ Post Content Here │  ││Post  ││
│  │ ❤️ 5  🗑️ Delete   │  ││❤️ 5  ││
│  └───────────────────┘  │└──────┘│
│                         │        │
│  ┌───────────────────┐  │┌──────┐│
│  │ User Name    Date │  ││User  ││
│  │ Post Content      │  ││Post  ││
│  │ ❤️ 12            │  ││❤️ 12 ││
│  └───────────────────┘  │└──────┘│
│                         │        │
└──────────────────────   └────────┘
```

---

## 🔐 Authentication Flow

```
User Registration
┌─────────────────────────────────┐
│ 1. Fill Name, Email, Password   │
│ 2. Click Register               │
│ 3. API: POST /api/users/register│
│ 4. Server validates input       │
│ 5. Check if email exists        │
│ 6. Create user in MongoDB       │
│ 7. Return user data             │
│ 8. Save to localStorage         │
│ 9. Redirect to Feed             │
└─────────────────────────────────┘

User Login
┌─────────────────────────────────┐
│ 1. Fill Email, Password         │
│ 2. Click Login                  │
│ 3. API: POST /api/users/login   │
│ 4. Server checks credentials    │
│ 5. Find user by email           │
│ 6. Compare password             │
│ 7. If match, return user data   │
│ 8. Save to localStorage         │
│ 9. Redirect to Feed             │
└─────────────────────────────────┘

Logout
┌─────────────────────────────────┐
│ 1. Click Logout button          │
│ 2. Clear localStorage           │
│ 3. Redirect to Login page       │
└─────────────────────────────────┘
```

---

## 🚀 Getting Started - Visual Steps

```
Step 1: Install
┌──────────────────────┐
│ npm install          │
│ (download libraries) │
└──────────────────────┘
         ↓

Step 2: Configure
┌──────────────────────┐
│ Set MONGO_URI in .env│
│ (database connection)│
└──────────────────────┘
         ↓

Step 3: Run Backend
┌──────────────────────┐
│ npm run dev          │
│ (start server)       │
│ http://localhost:5000│
└──────────────────────┘
         ↓

Step 4: Run Frontend
┌──────────────────────┐
│ npm run dev          │
│ (start app)          │
│ http://localhost:5173│
└──────────────────────┘
         ↓

Step 5: Use App
┌──────────────────────┐
│ Register / Login     │
│ Create Posts         │
│ Like & Share         │
│ Enjoy!               │
└──────────────────────┘
```

---

## ✨ Feature Highlights

```
Registration
┌──────────────────────────┐
│ ✅ Email validation      │
│ ✅ Unique email check    │
│ ✅ Password input        │
│ ✅ Error messages        │
└──────────────────────────┘

Posts
┌──────────────────────────┐
│ ✅ Create posts          │
│ ✅ View post author      │
│ ✅ See timestamps        │
│ ✅ Like/unlike posts     │
│ ✅ Delete own posts      │
│ ✅ Like counter          │
└──────────────────────────┘

UI/UX
┌──────────────────────────┐
│ ✅ Beautiful gradients   │
│ ✅ Smooth transitions    │
│ ✅ Hover effects         │
│ ✅ Responsive design     │
│ ✅ Clear navigation      │
│ ✅ Error handling        │
└──────────────────────────┘
```

---

**Now you have a complete picture of your app! 🎨**
