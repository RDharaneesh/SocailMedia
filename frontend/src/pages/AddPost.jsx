import React, { useState } from "react";
import { createPost } from "../services/api";
import "../styles/AddPost.css";

function AddPost({ goPage }) {
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!text.trim()) {
            setError("Post cannot be empty");
            return;
        }

        try {
            await createPost(user._id, text);
            goPage("feed");
        } catch (err) {
            setError(err.response?.data?.error || "Failed to create post");
        }
    };

    return (
        <div className="addpost-container">
            <div className="addpost-box">
                <h1>Create a New Post</h1>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <textarea
                        placeholder="What's on your mind?"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        rows="6"
                    ></textarea>
                    <div className="button-group">
                        <button type="submit" className="btn-primary">
                            Post
                        </button>
                        <button 
                            type="button" 
                            className="btn-secondary"
                            onClick={() => goPage("feed")}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPost;
