import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import ProfAvatar from "../assets/profile-avatar.jpg";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

import { MenuComponent } from "../components/JobSeekerMenuComp";
import RightDrawerComp from "../components/RightDrawerComp";
import { NotificationsComp } from "../components/NotificationComp";
import { CompanySideTabs } from "../components/CompanySideTabs";

export default function CompanyProfile() {
  const [badgeContent, setBadgeContent] = useState<number>(0);
  const [notifiDrawer, setNotifiDrawer] = useState<boolean>(false);

  const handleNotifiOpen = () => {
    // setBadgeContent(0);
    setNotifiDrawer(true);
  };

  const handleNotifiClose = () => {
    setNotifiDrawer(false);
  };

  return (
    <>
      <div className="relative bg-neutral-200 h-screen pt-14 flex flex-col justify-center">
        <div className="menu-bar w-full h-14 bg-slate-50 flex flex-row fixed top-0 left-0 justify-between px-20 z-10">
          <Link className="my-auto" to="/">
            <p className="text-xl text-center font-normal text-gray-600 mr-24 ml-5">
              Home
            </p>
          </Link>
          <Link to="/">
            <img src={Logo} alt="logo" style={{ height: 50 }} />
          </Link>
          {/* <div className="avatar my-auto flex flex-row">
            <Avatar alt="Remy Sharp" src={ProfAvatar} />
            <MenuComponent />
          </div> */}
          <div className="avatar my-auto flex flex-row">
            <Badge
              color="primary"
              badgeContent={badgeContent}
              className={
                badgeContent > 0
                  ? "my-auto mr-6 text-xl"
                  : "my-auto mr-3 text-xl"
              }
            >
              <NotificationsRoundedIcon
                className="text-gray-500"
                onClick={() => {
                  handleNotifiOpen();
                }}
              />
            </Badge>
            <Avatar alt="Remy Sharp" src={ProfAvatar} />
            <MenuComponent>Company Name</MenuComponent>
            <RightDrawerComp
              openDrawer={notifiDrawer}
              handleClose={handleNotifiClose}
            >
              <NotificationsComp>
                Click the close icon to see the Collapse transition in action!
              </NotificationsComp>
              <NotificationsComp>
                Click the close icon to see the Collapse transition in action!
              </NotificationsComp>
            </RightDrawerComp>
          </div>
        </div>
        <div className="h-full w-full bg-white rounded">
          <CompanySideTabs handleFunc={() => {}} />
        </div>
      </div>
    </>
  );
}
