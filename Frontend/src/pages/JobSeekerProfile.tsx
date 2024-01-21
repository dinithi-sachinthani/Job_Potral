import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/dummy-logo.png";
import ProfAvatar from "../assets/profile-avatar.jpg";

import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import Grid from "@mui/material/Grid";

import { MenuComponent } from "../components/JobSeekerMenuComp";
import RightDrawerComp from "../components/RightDrawerComp";
import { NotificationsComp } from "../components/NotificationComp";
import SearchBar from "../components/SearchBar";
import SideTabs from "../components/SideTabs";

export default function JobSeekerProfile() {
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
        <div className="menu-bar w-full h-14 bg-slate-50 flex flex-row fixed top-0 left-0 justify-between px-20">
          <Link to="/">
            <img src={Logo} alt="dummy-logo" style={{ height: 50 }} />
          </Link>
          <SearchBar />
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
            <MenuComponent>username</MenuComponent>
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
        <Grid container spacing={0} className="h-full rounded">
          <Grid
            item
            xs={12}
            md={9}
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{
              padding: "16px",
            }}
          >
            <div className="h-full w-full bg-white rounded">
              <SideTabs />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            className="px-5"
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{ padding: "16px", paddingLeft: "0px" }}
          >
            <div className="h-full w-full bg-gray-50 rounded"></div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
