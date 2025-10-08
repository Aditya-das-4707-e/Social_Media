import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import Footer from "../components/Footer";
import PostListProvider from "../store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          <Outlet></Outlet>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;