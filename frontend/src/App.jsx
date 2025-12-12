import React, { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddPost from "./pages/AddPost";
import Feed from "./pages/Feed";

function App() {
  const [page, setPage] = useState("login"); 

  return (
    <div>
      {page === "login" && <Login goPage={setPage} />}
      {page === "register" && <Register goPage={setPage} />}
      {page === "addpost" && <AddPost goPage={setPage} />}
      {page === "feed" && <Feed goPage={setPage} />}
    </div>
  );
}

export default App;
