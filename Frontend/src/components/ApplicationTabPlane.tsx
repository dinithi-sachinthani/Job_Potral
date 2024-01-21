import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";

import BannerImage1 from "../assets/banner-image1.jpg";
import BannerImage2 from "../assets/banner-image2.png";
import BannerImage3 from "../assets/banner-image3.jpg";
import ApplicationCard from "./ApplicationCard";

type MyFunc = () => void;

interface TemporaryDrawerProps {
  handleFunc: MyFunc;
}

const ApplicationTabPlane: React.FC<TemporaryDrawerProps> = ({
  handleFunc,
}) => {
  return (
    <>
      <div className="top w-full flex flex-row-reverse">
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
            <ApplicationCard
              image={BannerImage1}
              handleAccept={() => {
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
            <ApplicationCard
              image={BannerImage2}
              handleAccept={() => {
                console.log("Accept");
              }}
              handleDecline={() => {
                console.log("Decline");
              }}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ApplicationTabPlane;
