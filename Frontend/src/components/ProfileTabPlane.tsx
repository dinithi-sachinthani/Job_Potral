import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

import BannerImage1 from "../assets/banner-image1.jpg";
import ProfAvatar from "../assets/profile-avatar.jpg";
import { JobApplyComp } from "./JobApplyComp";
import Avatar from "@mui/material/Avatar";

type MyFunc = () => void;

interface TemporaryDrawerProps {
  handleFunc: MyFunc;
}

const ProfileTabPlane: React.FC<TemporaryDrawerProps> = ({ handleFunc }) => {
  const [openJA, setOpenJA] = useState(false);

  const handleJAOpen = () => {
    setOpenJA(true);
  };

  const handleJAClose = () => {
    setOpenJA(false);
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Typography key="3" color="text.primary">
      Profile
    </Typography>,
  ];

  return (
    <>
      <div className={"top w-full flex flex-row"}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          style={{ marginLeft: "16px" }}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </div>
      <div className="w-full h-full mt-5 px-4">
        <div className="banner bg-gray-200 w-full h-72 rounded p-4">
          <div
            className="bg-neutral-200 h-4/5 flex flex-col justify-center"
            style={{
              backgroundImage: `url(${BannerImage1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="flex flex-col">
            <Avatar alt="Remy Sharp" src={ProfAvatar} />
            <div>
              <p className="text-3xl font-medium">Company Name</p>
              <div className="flex flex-row">
                <p className="font-sans text-sm font-normal">
                  <LocationOnRoundedIcon
                    style={{ fontSize: "14px", marginRight: "7px" }}
                  />
                  Company address, line 1, line 2, last line.
                </p>
                <p className="font-sans text-sm font-normal">
                  <MailRoundedIcon
                    style={{
                      fontSize: "14px",
                      marginLeft: "30px",
                      marginRight: "7px",
                    }}
                  />
                  email
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JobApplyComp open={openJA} handleClose={handleJAClose} />
    </>
  );
};

export default ProfileTabPlane;
