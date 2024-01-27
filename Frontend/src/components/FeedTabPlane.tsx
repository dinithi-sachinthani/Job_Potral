import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import FeedCard from "./FeedCard";
import BannerImage1 from "../assets/banner-image1.jpg";
import BannerImage2 from "../assets/banner-image2.png";
import BannerImage3 from "../assets/banner-image3.jpg";
import { JobApplyComp } from "./JobApplyComp";
import AddJobComp from "./AddJobComp";

type MyFunc = () => void;

interface TemporaryDrawerProps {
  handleFunc: MyFunc;
  isCompany: boolean;
}

const FeedTabPlane: React.FC<TemporaryDrawerProps> = ({
  handleFunc,
  isCompany,
}) => {
  const [openJA, setOpenJA] = useState(false);
  const [openJApply, setOpenJApply] = useState(false);

  const handleJAOpen = () => {
    setOpenJA(true);
  };

  const handleJAClose = () => {
    setOpenJA(false);
  };

  const handleJApplyOpen = () => {
    setOpenJApply(true);
  };

  const handleJApplyClose = () => {
    setOpenJApply(false);
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Typography key="3" color="text.primary">
      Posts
    </Typography>,
  ];

  return (
    <>
      <div
        className={
          isCompany
            ? "top w-full flex flex-row justify-between"
            : "top w-full flex flex-row-reverse"
        }
      >
        {isCompany ? (
          <>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              style={{ marginLeft: "16px" }}
            >
              {breadcrumbs}
            </Breadcrumbs>
          </>
        ) : (
          <></>
        )}
        <Button
          autoFocus
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: "16px",
            textTransform: "none",
          }}
          endIcon={<CachedRoundedIcon />}
          onClick={handleFunc}
        >
          Refresh
        </Button>
      </div>
      {isCompany ? (
        <div className="mx-4">
          <AddJobComp
            handleOpenModal={() => {
              handleJApplyOpen;
            }}
            handleCloseModal={() => {
              handleJApplyClose;
            }}
          />
        </div>
      ) : (
        <></>
      )}
      <div className="w-full h-full">
        <Grid container spacing={0} className="w-full">
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{
              padding: "16px",
            }}
          >
            <FeedCard
              image={BannerImage1}
              handleAccept={() => {
                handleJAOpen();
                console.log("Accept");
              }}
              handleDecline={() => {
                console.log("Decline");
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{
              padding: "16px",
            }}
          >
            <FeedCard
              image={BannerImage2}
              handleAccept={() => {
                handleJAOpen();
                console.log("Accept");
              }}
              handleDecline={() => {
                console.log("Decline");
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{
              padding: "16px",
            }}
          >
            <FeedCard
              image={BannerImage3}
              handleAccept={() => {
                handleJAOpen();
                console.log("Accept");
              }}
              handleDecline={() => {
                console.log("Decline");
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{
              padding: "16px",
            }}
          >
            <FeedCard
              image={BannerImage1}
              handleAccept={() => {
                handleJAOpen();
                console.log("Accept");
              }}
              handleDecline={() => {
                console.log("Decline");
              }}
            />
          </Grid>
        </Grid>
      </div>
      <JobApplyComp open={openJA} handleClose={handleJAClose} />
      <JobApplyComp open={openJApply} handleClose={handleJApplyClose} />
    </>
  );
};

export default FeedTabPlane;
