import React from "react";
import "./SidebarItem.css";

function SidebarItem({ Icon, title, Subicon, subtitle }) {
  return (
    <div className="sidebaritem">
      <Icon />
      {/* <div className="sidebaritem--split"> */}
      <h2>{title}</h2>
      {/* <div className="sidebaritem--content"> */}
      {/* <Subicon /> */}
      {/* <p>{subtitle}</p> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default SidebarItem;
