import React from "react";
import "./Feeds.css";
import PublicRoundedIcon from "@material-ui/icons/PublicRounded";
import MoodIcon from "@material-ui/icons/Mood";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import GifIcon from "@material-ui/icons/Gif";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Feeds() {
  return (
    <div className="feeds">
      <div className="feeds--header">
        <div className="feeds--header--top">
          <div className="feeds--user--post--avatar">
            <img src="https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" />
          </div>
          <div className="feeds--user--info">
            <h2>Lorem Ipsum</h2>
            <div className="time">
              <p>10h</p> &middot;
              <PublicRoundedIcon />
            </div>
          </div>
        </div>
        <div className="feeds--header--bottom">
          <p>Thank you Lord!!!!</p>
          <div className="feeds--header--img">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
          </div>
          <div className="feeds--like--split">
            <div className="feeds--like--split--left">
              <div>
                <ThumbUpAltIcon />
              </div>
              <div>
                <FavoriteIcon />
              </div>
            </div>
            <div className="feeds--like--split--right">
              <p>200 Comments</p>
            </div>
          </div>
          <div className="feeds--action">
            <div>
              <ThumbUpAltIcon />
              <p>like</p>
            </div>
            <div>
              <ChatBubbleOutlineIcon />
              <p>comment</p>
            </div>
            <div>
              <ScreenShareIcon />
              <p>share</p>
            </div>
          </div>
          <div className="feeds--response">
            <p>View previous comments</p>
            <div className="feeds--user--comment">
              <div className="feeds--user--comment--dp">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
              </div>
              <div>
                <h2>Lorem</h2>
                <p>Hallelujah</p>
              </div>
            </div>
          </div>

          <div className="feeds--response--comment">
            <div className="feeds--dp">
              <img src="https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" />
            </div>
            <div className="feeds--input--comment">
              <input type="text" placeholder="Write a comment..." />
              <MoodIcon />
              <CameraAltIcon />
              <div>
                <GifIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feeds;
