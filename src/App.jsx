import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
    <>
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setselectedTab={setselectedTab}></SideBar>
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost></CreatePost>}
          <Footer />
        </div>
      </div>
    </PostListProvider>
    </>
  );
}

export default App;
