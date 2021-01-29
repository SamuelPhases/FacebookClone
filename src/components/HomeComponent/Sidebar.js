import React, { useState } from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";

import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import SecurityRoundedIcon from "@material-ui/icons/SecurityRounded";
import SupervisorAccountRoundedIcon from "@material-ui/icons/SupervisorAccountRounded";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import LiveTvRoundedIcon from "@material-ui/icons/LiveTvRounded";
import TodayRoundedIcon from "@material-ui/icons/TodayRounded";
import HistoryRoundedIcon from "@material-ui/icons/HistoryRounded";
import BookmarkRoundedIcon from "@material-ui/icons/BookmarkRounded";
import FlagRoundedIcon from "@material-ui/icons/FlagRounded";
import ShoppingBasketRoundedIcon from "@material-ui/icons/ShoppingBasketRounded";
import LocalOfferRoundedIcon from "@material-ui/icons/LocalOfferRounded";
import RecordVoiceOverRoundedIcon from "@material-ui/icons/RecordVoiceOverRounded";
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded";
import VideogameAssetRoundedIcon from "@material-ui/icons/VideogameAssetRounded";
import NavigationRoundedIcon from "@material-ui/icons/NavigationRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import CheckBoxRoundedIcon from "@material-ui/icons/CheckBoxRounded";

function Sidebar() {
  const [show, setShow] = useState(false);

  return (
    <div className="sidebar">
      <SidebarItem Icon={AccountCircleRoundedIcon} title={"Lorem"} />
      <SidebarItem
        Icon={SecurityRoundedIcon}
        title={"COVID-19 Information Center"}
      />
      <SidebarItem Icon={SupervisorAccountRoundedIcon} title={"Friends"} />
      <SidebarItem
        Icon={SupervisedUserCircleRoundedIcon}
        title={"Groups"}
        Subicon={FiberManualRecordRoundedIcon}
        subtitle={"3 new"}
      />
      <SidebarItem
        Icon={LiveTvRoundedIcon}
        title={"Videos"}
        Subicon={FiberManualRecordRoundedIcon}
        subtitle={"9+ new videos"}
      />
      {show && (
        <>
          <SidebarItem Icon={TodayRoundedIcon} title={"Events"} />
          <SidebarItem Icon={HistoryRoundedIcon} title={"Memories"} />
          <SidebarItem Icon={BookmarkRoundedIcon} title={"Saved"} />
          <SidebarItem Icon={FlagRoundedIcon} title={"Pages"} />
          <SidebarItem
            Icon={ShoppingBasketRoundedIcon}
            title={"Buy and Sell Groups"}
          />
          <SidebarItem Icon={NavigationRoundedIcon} title={"Campus"} />
          <SidebarItem Icon={CreditCardRoundedIcon} title={"Pay"} />
          <SidebarItem Icon={VideogameAssetRoundedIcon} title={"Games"} />
          <SidebarItem Icon={WorkRoundedIcon} title={"Jobs"} />
          <SidebarItem Icon={WbSunnyRoundedIcon} title={"Weather"} />
        </>
      )}
      <div className="more--toggle" onClick={() => setShow(!show)}>
        {!show ? (
          <>
            <div>
              <ExpandMoreRoundedIcon />
            </div>
            <h2>See more</h2>
          </>
        ) : (
          <>
            <div>
              <ExpandLessRoundedIcon />
            </div>
            <h2>See less</h2>
          </>
        )}
      </div>
      {/* <hr /> */}
      <div className="shortcut">
        <h3>your shortcuts</h3>
        <div>
          <AccountCircleRoundedIcon />
          <h5>
            The 5-Day React Javascript Challenge (Official)
            <CheckBoxRoundedIcon />
          </h5>
        </div>
      </div>
      <div className="footer">
        <p>Privacy ·</p>
        <p>Terms ·</p>
        <p>Advertising ·</p>
        <p>more ·</p>
        <p>ad choices ·</p>
        <p>cookies ·</p>
      </div>
    </div>
  );
}

export default Sidebar;
// import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
// import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
// import RecordVoiceOverRoundedIcon from '@material-ui/icons/RecordVoiceOverRounded';
// import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
// import VideogameAssetRoundedIcon from '@material-ui/icons/VideogameAssetRounded';
// import NavigationRoundedIcon from '@material-ui/icons/NavigationRounded';
// import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
// import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
// import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
