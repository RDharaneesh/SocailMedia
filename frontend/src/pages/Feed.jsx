import React, { useState, useEffect } from "react";
import { getPosts, deletePost, likePost } from "../services/api";
import "../styles/Feed.css";

function Feed({ goPage }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await getPosts();
            setPosts(response.data);
        } catch (err) {
            console.error("Failed to fetch posts");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (postId) => {
        try {
            await deletePost(postId);
            setPosts(posts.filter(post => post._id !== postId));
        } catch (err) {
            console.error("Failed to delete post");
        }
    };

    const handleLike = async (postId) => {
        try {
            const response = await likePost(postId, user._id);
            setPosts(posts.map(post => 
                post._id === postId ? response.data : post
            ));
        } catch (err) {
            console.error("Failed to like post");
        }
    };

    return (
        <div className="feed-container">
            <header className="feed-header">
                <h1>Social Feed</h1>
                <div className="header-buttons">
                    <button onClick={() => goPage("addpost")} className="btn-primary">
                        + New Post
                    </button>
                    <button onClick={() => {
                        localStorage.removeItem("user");
                        goPage("login");
                    }} className="btn-logout">
                        Logout
                    </button>
                </div>
            </header>

            <div className="posts-container">
                {loading ? (
                    <p>Loading posts...</p>
                ) : posts.length === 0 ? (
                    <p>No posts yet. Be the first to post!</p>
                ) : (
                    posts.map(post => (
                        <div key={post._id} className="post-card">
                            <div className="post-header">
                                <h3>{post.userId?.name || "Unknown User"}</h3>
                                <span className="post-time">
                                    {new Date(post.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="post-text">{post.text}</p>
                            <div className="post-actions">
                                <button 
                                    className={`btn-like ${post.likes.includes(user._id) ? 'liked' : ''}`}
                                    onClick={() => handleLike(post._id)}
                                >
                                    ❤️ {post.likes.length}
                                </button>
                                {post.userId?._id === user._id && (
                                    <button 
                                        className="btn-delete"
                                        onClick={() => handleDelete(post._id)}
                                    >
                                        🗑️ Delete
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Feed;
