import React from "react";
import "./Widget.css";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Widget() {
  return (
    <div className="widget">
      <h2>Sponsored</h2>
      <div className="widget--sponsored">
        <a href="https://www.google.com" target="_blank">
          <div className="widget--sponsored--img">
            <img src="https://lh3.googleusercontent.com/proxy/_aGpaPYNhKYhdd_NKybyL_XjoiujX5lmE-U4tEwYxpKNSlgI2We33rgwcsrvqpZ5u4W0NHEtJQ9PONqOYTDGRerSG8_VQs8EO0bgllgeAt6_PhnpvhR0lZzPnTbfpoSjoQ" />
          </div>
          <div className="widget--sponsored--content">
            <h3>EduCanada Virtual Fair .</h3>
            <p>educanadavirtual.com</p>
          </div>
        </a>
        <a href="https://www.google.com" target="_blank">
          <div className="widget--sponsored--img">
            <img src="https://lh3.googleusercontent.com/proxy/_aGpaPYNhKYhdd_NKybyL_XjoiujX5lmE-U4tEwYxpKNSlgI2We33rgwcsrvqpZ5u4W0NHEtJQ9PONqOYTDGRerSG8_VQs8EO0bgllgeAt6_PhnpvhR0lZzPnTbfpoSjoQ" />
          </div>
          <div className="widget--sponsored--content">
            <h3>EduCanada Virtual Fair .</h3>
            <p>educanadavirtual.com</p>
          </div>
        </a>
      </div>
      <div className="widget--birthday">
        <h2>Birthdays</h2>
        <div>
          <CardGiftcardIcon />
          <p>
            <strong>Lorem Ipsum </strong>
            and
            <strong> 2 others </strong>
            have birthdays today.
          </p>
        </div>
      </div>
      <div className="widget--contact">
        <div className="widget--contact--header">
          <h2>contacts</h2>
          <div className="widget--contact--icons">
            <div>
              <VideoCallIcon />
            </div>
            <div>
              <SearchIcon />
            </div>
            <div>
              <MoreHorizIcon />
            </div>
          </div>
        </div>
        <div className="widget--contact--list">
          <div>
            <img src="https://lh3.googleusercontent.com/proxy/_aGpaPYNhKYhdd_NKybyL_XjoiujX5lmE-U4tEwYxpKNSlgI2We33rgwcsrvqpZ5u4W0NHEtJQ9PONqOYTDGRerSG8_VQs8EO0bgllgeAt6_PhnpvhR0lZzPnTbfpoSjoQ" />
          </div>
          <h2>Lore </h2>
        </div>
      </div>
    </div>
  );
}

export default Widget;
