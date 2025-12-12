## API Examples

### Register New User
```
POST http://localhost:5000/api/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login User
```
POST http://localhost:5000/api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Post
```
POST http://localhost:5000/api/posts/add
Content-Type: application/json

{
  "userId": "USER_ID_HERE",
  "text": "This is my first post!"
}
```

### Get All Posts
```
GET http://localhost:5000/api/posts
```

### Like/Unlike Post
```
POST http://localhost:5000/api/posts/POST_ID_HERE/like
Content-Type: application/json

{
  "userId": "USER_ID_HERE"
}
```

### Delete Post
```
DELETE http://localhost:5000/api/posts/POST_ID_HERE
```

---

## Test Credentials

Once registered, you can use these credentials to test:

**User 1:**
- Email: test1@example.com
- Password: test123

**User 2:**
- Email: test2@example.com
- Password: test123

---

## Response Examples

### Successful Registration
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

### Successful Post Creation
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "userId": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "text": "This is my first post!",
  "likes": [],
  "createdAt": "2024-01-15T10:35:00Z",
  "updatedAt": "2024-01-15T10:35:00Z"
}
```

### Get All Posts
```json
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "userId": {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "text": "This is my first post!",
    "likes": ["507f1f77bcf86cd799439011"],
    "createdAt": "2024-01-15T10:35:00Z",
    "updatedAt": "2024-01-15T10:40:00Z"
  }
]
```

### Error Response
```json
{
  "error": "Email already exists"
}
```
