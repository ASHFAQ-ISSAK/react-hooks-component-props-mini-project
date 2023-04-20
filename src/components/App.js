import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";
import blogLogo from "../assets/logo.svg";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <ArticleList posts={blogData.posts} />
      <About image={blogLogo} about={blogData.about} />
    </div>
  );
}

export default App;
