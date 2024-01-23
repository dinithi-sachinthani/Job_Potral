import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import ProfAvatar from "../assets/profile-avatar.jpg";
import BannerBackground from "../assets/background-banner.png";
import about_us from "../assets/about_us.webp";
import BannerImage2 from "../assets/banner-image2.png";
import BannerImage3 from "../assets/banner-image3.jpg";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ManageHistoryRoundedIcon from "@mui/icons-material/ManageHistoryRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";

import MenuComponent from "../components/MenuComponent";
import { JobSeekerSignUpComp } from "../components/JobSeekerSignUpComp";
import { CompanySignUpComp } from "../components/CompanySignUpComp";

export default function Home() {
  const [openJSSignUp, setOpenJSSignUp] = useState(false);
  const [openCSignUp, setOpenCSignUp] = useState(false);

  const handleJSSignUpOpen = () => {
    setOpenJSSignUp(true);
  };

  const handleJSSignUpClose = () => {
    setOpenJSSignUp(false);
  };

  const handleCSignUpOpen = () => {
    setOpenCSignUp(true);
  };

  const handleCSignUpClose = () => {
    setOpenCSignUp(false);
  };

  return (
    <>
      <div
        className="relative bg-neutral-200 h-screen pb-24 pt-14 flex flex-col justify-center"
        style={{
          backgroundImage: `url(${BannerBackground})`,
          // backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="menu-bar w-full h-14 bg-slate-50 flex flex-row fixed top-0 left-0 justify-between px-20 z-10">
          <Link to="/">
            <img src={Logo} alt="logo" style={{ height: 50 }} />
          </Link>
          <div className="avatar my-auto flex flex-row">
            <Avatar alt="Remy Sharp" src={ProfAvatar} />
            <MenuComponent />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="font-sans text-center text-6xl text-cyan-600 font-bold mb-5">
            INTERNLA
          </p>
        </div>
        <p className="font-sans text-center text-4xl font-medium">
          Empowering Your Career Journey
        </p>
        <p className="text-center text-2xl font-medium text-blue-600 mt-4">
          Sign up today
        </p>
        <div
          className="signup-btns mt-6"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            style={{
              marginRight: "3px",
              textTransform: "none",
              fontSize: "1.05rem",
            }}
            variant="outlined"
            onClick={handleJSSignUpOpen}
          >
            As JobSeeker
          </Button>
          <JobSeekerSignUpComp
            open={openJSSignUp}
            handleClose={handleJSSignUpClose}
          />
          <Button
            style={{
              marginLeft: "3px",
              textTransform: "none",
              fontSize: "1.05rem",
            }}
            variant="outlined"
            onClick={handleCSignUpOpen}
          >
            As Company
          </Button>
          <CompanySignUpComp
            open={openCSignUp}
            handleClose={handleCSignUpClose}
          />
        </div>
      </div>

      {/* New section  */}
      <div
        style={{
          paddingLeft: "6%",
          paddingRight: "6%",
        }}
      >
        <Grid container spacing={2} className="pb-24">
          <Grid
            item
            xs={12}
            md={4}
            className="px-5"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <SearchRoundedIcon
              sx={{
                fontSize: 200,
                color: "#10b981",
                marginTop: "25px",
                marginBottom: "25px",
              }}
            />
            <p className="text-center text-3xl font-medium mb-3">
              Find Your Job Easier
            </p>
            <p className="text-center font-normal">
              Navigate your career path seamlessly. Our advanced search features
              empower you to find the perfect job match quickly. Tailor your
              search by industry, location, and skills. Your next career move is
              just a click away
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            className="px-5"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <ManageHistoryRoundedIcon
              sx={{
                fontSize: 200,
                color: "#10b981",
                marginTop: "25px",
                marginBottom: "25px",
              }}
            />
            <p className="text-center text-3xl font-medium mb-3">
              Easy Application Process
            </p>
            <p className="text-center font-normal">
              Simplify your journey to success with our streamlined application
              process. Effortlessly apply to your desired jobs with just a few
              clicks. Accelerate your career by connecting with opportunities
              through an intuitive and user-friendly application experience.
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            className="px-5"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <VerifiedUserRoundedIcon
              sx={{
                fontSize: 180,
                color: "#10b981",
                marginTop: "30px",
                marginBottom: "40px",
              }}
            />
            <p className="text-center text-3xl font-medium mb-3">
              Trust and Security
            </p>
            <p className="text-center font-normal">
              Your trust is our priority. We prioritize security with encrypted
              data, ensuring your job search or recruitment process is
              confidential and secure. Build your future with confidence,
              knowing your information is protected on our trusted job portal
              platform.
            </p>
          </Grid>
        </Grid>
      </div>

      {/* New section  */}
      <div
        className="bg-neutral-200 flex flex-row"
        style={{
          padding: "80px 6% 40px 6%",
        }}
      >
        <div className="left flex flex-col justify-center">
          <p className="text-4xl font-medium mb-8">About Us</p>
          <p className="text-xl font-light pr-14">
            At INTERNLA, we are dedicated to connecting talented professionals
            with rewarding opportunities. Our platform simplifies the job search
            and recruitment process, offering user-friendly tools and a vast
            network of employers. Whether you're a job seeker or employer, trust
            us to streamline your journey, making the path to success smoother
            and more efficient.
          </p>
        </div>
        <div
          className="background-container bg-black"
          style={{
            width: "1500px",
            height: "400px",
            backgroundImage: `url(${about_us})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      {/* New section  */}
      <div
        className="flex flex-row"
        style={{
          padding: "80px 6% 40px 6%",
        }}
      >
        <div
          className="background-container bg-black"
          style={{
            width: "1500px",
            height: "400px",
            backgroundImage: `url(${BannerImage2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="left flex flex-col justify-center">
          <p className="text-4xl font-medium mb-8 pl-14">
            Title One: This is your title one
          </p>
          <p className="text-xl font-light pl-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            explicabo quisquam architecto blanditiis dolor necessitatibus minima
            commodi quos beatae hic! Alias illum hic magni! Consequuntur odio
            facilis rerum beatae sequi quo magni unde ratione maxime, molestias
            officia excepturi quos in eaque, quae, deleniti esse. Iusto fuga
            itaque magni numquam neque.
          </p>
        </div>
      </div>
      {/* New section  */}
      <div
        className="bg-neutral-200 flex flex-row"
        style={{
          padding: "80px 6% 40px 6%",
        }}
      >
        <div className="left flex flex-col justify-center">
          <p className="text-4xl font-medium mb-8">
            Title One: This is your title one
          </p>
          <p className="text-xl font-light pr-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            explicabo quisquam architecto blanditiis dolor necessitatibus minima
            commodi quos beatae hic! Alias illum hic magni! Consequuntur odio
            facilis rerum beatae sequi quo magni unde ratione maxime, molestias
            officia excepturi quos in eaque, quae, deleniti esse. Iusto fuga
            itaque magni numquam neque.
          </p>
        </div>
        <div
          className="background-container bg-black"
          style={{
            width: "1500px",
            height: "400px",
            backgroundImage: `url(${BannerImage3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </>
  );
}
