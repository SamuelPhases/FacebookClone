import { Avatar } from "@material-ui/core";
import React from "react";
import "./Feed.css";
import StoryReelContainer from "./StoryReelContainer";
import VideoCallRoundedIcon from "@material-ui/icons/VideoCallRounded";
import PhotoLibraryRoundedIcon from "@material-ui/icons/PhotoLibraryRounded";
import InsertEmoticonRoundedIcon from "@material-ui/icons/InsertEmoticonRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import Feeds from "./Feeds";

function Feed() {
  return (
    <div className="feed">
      {/* STORY REEL */}
      <div className="story--reel--parent--container">
        <StoryReelContainer />
      </div>
      {/* INPUT */}
      <div className="feed--input">
        <div className="feed--input--row-1">
          <Avatar />
          <div className="toggler">
            <p>What's on your mind, Lorem?</p>
          </div>
        </div>
        <div className="feed--input--row--11">
          <div>
            <VideoCallRoundedIcon />
            <h3>Live Video</h3>
          </div>
          <div>
            <PhotoLibraryRoundedIcon />
            <h3>Photo/Video</h3>
          </div>
          <div>
            <InsertEmoticonRoundedIcon />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
      {/* Room */}
      <div className="feed--room">
        <div className="feed--room--1">
          <div className="feed--room--left">
            <VideoCallRoundedIcon />
            <h4>Rooms</h4>
            <p>Video chat with friends </p>
            <InfoRoundedIcon />
          </div>
          <div className="feed--room--right">
            <h4>Create Room</h4>
          </div>
        </div>
        <div className="feed--room--11">
          <div className="feed--room--dp">
            <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80" />
          </div>
          <div className="feed--room--dp">
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" />
          </div>
        </div>
      </div>
      {/* Feeds */}
      <Feeds />
      <Feeds />
    </div>
  );
}

export default Feed;
