import axios from "axios";

const API_URL = "https://socailmedia-1-drpp.onrender.com/api";

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// User API
export const registerUser = (name, email, password) => 
    api.post("/users/register", { name, email, password });

export const loginUser = (email, password) => 
    api.post("/users/login", { email, password });

export const getUsers = () => api.get("/users");

// Post API
export const createPost = (userId, text) => 
    api.post("/posts/add", { userId, text });

export const getPosts = () => api.get("/posts");

export const deletePost = (postId) => 
    api.delete(`/posts/${postId}`);

export const likePost = (postId, userId) => 
    api.post(`/posts/${postId}/like`, { userId });

export default api;
