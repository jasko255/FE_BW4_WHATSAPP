import React, { useState } from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { ArrowBack, Edit, SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
    }
  };

  const [profileBar, setProfileBar] = useState(false);
  const showProfileBar = () => setProfileBar(!profileBar);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__header">
          <IconButton>
            {/* <Link to='#' className='profile__menu'> */}
            <Avatar onClick={showProfileBar} />
            {/* </Link> */}{" "}
          </IconButton>
          <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon onClick={createChat} />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchOutlined />
            <input placeholder="Search or start new chat" type="text" />
          </div>
        </div>
        <div className="sidebar__chats">
          {/* <SidebarChat addNewChat/> */}
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </div>
      </div>

      <div
        className={profileBar ? "profile__section active" : "profile__section"}
      >
        <div className="profile__header" onClick={showProfileBar}>
          <IconButton>
            {" "}
            <ArrowBack />{" "}
          </IconButton>{" "}
          <p>Profile</p>
        </div>
        <div className="profile__body">
          <div className="avatar__box">
            <Avatar
              className="profile__avatar"
              style={{ width: "140px", height: "140px" }}
            />
          </div>
          <div className="name__field">
            <h6>Your name</h6>
            <span> Ubeyt </span> <Edit />
          </div>
          <div className="info-field">
            <span>
              This is not your username or pin. 
</span>
          </div>
          <div className="about"> <h6> About </h6>
          <div className="about__input"> <span> Hey there! I am using WhatsApp. </span> <Edit /> </div> </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

// This name will be visible to 
// your WhatsApp contacts