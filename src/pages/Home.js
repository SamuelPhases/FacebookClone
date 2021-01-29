import React from "react";
import Feed from "../components/HomeComponent/Feed";
import Sidebar from "../components/HomeComponent/Sidebar";
import Widget from "../components/HomeComponent/Widget";
import Header from "../partial/Header";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home--body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default Home;
