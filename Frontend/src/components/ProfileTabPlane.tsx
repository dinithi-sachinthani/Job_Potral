import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { purple } from "@mui/material/colors";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";

import BannerImage1 from "../assets/banner-image1.jpg";
import ProfAvatar from "../assets/profile-avatar.jpg";
import { JobApplyComp } from "./JobApplyComp";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

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

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

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
        <div className="banner bg-gray-200 w-full h-80 rounded p-4">
          <div
            className="bg-neutral-200 h-4/5 flex flex-col justify-center"
            style={{
              backgroundImage: `url(${BannerImage1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="relative flex flex-row">
            <Avatar
              style={{
                border: "5px solid #e5e5e5",
                width: "160px",
                height: "auto",
                position: "absolute",
                left: "10px",
                top: "-95px",
              }}
              alt="Remy Sharp"
              src={ProfAvatar}
            />
            <div style={{ marginLeft: "190px" }}>
              <p className="text-3xl font-medium mb-1 mt-1 text-gray-700">
                Company Name
              </p>
              <div className="flex flex-row text-gray-800">
                <p className="font-sans text-sm font-norma">
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
        <div className="add-job bg-gray-200 w-full h-fit mt-5 rounded p-4 px-14 flex flex-row">
          <Avatar
            style={{
              // border: "5px solid #e5e5e5",
              width: "65px",
              height: "auto",
            }}
            alt="Remy Sharp"
            src={ProfAvatar}
          />
          <div
            onClick={() => {
              console.log("Add Job!!!!.....");
            }}
            className="bg-gray-50 w-full ml-5 rounded-full flex flex-col justify-center pl-8 text-gray-600 my-auto"
            style={{ height: "50px" }}
          >
            <p>Add new post and hire jobseekers for Company Name...</p>
          </div>
          <div
            onClick={() => {
              console.log("Add Job!!!!.....");
            }}
            className="bg-gray-50 my-auto"
            style={{
              height: "50px",
              width: "60px",
              borderRadius: "100%",
              marginLeft: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddRoundedIcon />
          </div>
        </div>
        <div className="add-job bg-gray-200 w-full h-fit mt-5 rounded p-4 px-14 flex flex-col">
          <p className="font-sans text-2xl font-medium text-gray-700 mb-3">
            About
          </p>
          <p className="font-sans text-md font-normal text-gray-600 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            aperiam culpa cum! Quia amet quam dolorum sed, alias eligendi magni
            illum ab rerum ipsa dolor voluptatem adipisci id ducimus tenetur
            sequi incidunt dicta, architecto, eaque ut cupiditate eveniet? Ut
            nemo suscipit unde minus id. Voluptas dolorem itaque est ipsum quod.
          </p>
        </div>
        <div className="employee-count bg-gray-200 w-full h-fit mt-5 rounded p-4 px-14 flex flex-col">
          <p className="font-sans text-3xl font-medium text-gray-700 my-2">
            100 employees
          </p>
        </div>
        <Divider
          style={{ width: "100%", marginTop: "30px", marginBottom: "30px" }}
        />
        <p className="font-sans text-3xl font-medium text-gray-700 mb-3">
          <SettingsRoundedIcon
            className="ml-2 mr-3"
            style={{ fontSize: "30px" }}
          />
          Setting
        </p>
        <ColorButton
          variant="contained"
          style={{
            width: "100%",
            justifyContent: "start",
            paddingLeft: "45px",
            textTransform: "none",
            fontSize: "15px",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          <KeyRoundedIcon style={{ fontSize: "20px", marginRight: "12px" }} />
          Change password
        </ColorButton>
      </div>
      <JobApplyComp open={openJA} handleClose={handleJAClose} />
    </>
  );
};

export default ProfileTabPlane;
