import React, { useState } from "react";
import StoryReel from "./StoryReel";
import "./StoryReelContainer.css";

function StoryReelContainer() {
  const [scroll, setScroll] = useState(false);

  return (
    <>
      <div className={`story--reel--container ${scroll && "scroll--side"}`}>
        <StoryReel />
        <StoryReel />
        <StoryReel />
        <StoryReel />
        <StoryReel />
        <StoryReel />
        <StoryReel />
        <StoryReel />
        <StoryReel />
        <StoryReel />
        <StoryReel />
        <StoryReel />
        <StoryReel />
        <StoryReel />
        <StoryReel />
      </div>
      {/* <div
        className="arrow--story--reel"
        onClick={() => {
          setScroll(true);
        }}
      >
        <h1>N</h1>
      </div> */}
    </>
  );
}

export default StoryReelContainer;
