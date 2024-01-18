import Logo from "../assets/dummy-logo.png";
import ProfAvatar from "../assets/profile-avatar.jpg";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import MenuComponent from "../components/MenuComponent";

export default function Home() {
  return (
    <div className="relative bg-neutral-200 h-screen pt-14 flex flex-col justify-start">
      <div className="menu-bar w-full h-14 bg-slate-50 flex flex-row fixed top-0 left-0 justify-between px-20">
        <img src={Logo} alt="dummy-logo" style={{ height: 50 }} />
        <div className="avatar my-auto flex flex-row">
          <Avatar alt="Remy Sharp" src={ProfAvatar} />
          <MenuComponent />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={Logo} alt="dummy-logo" style={{ width: "70%" }} />
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
          onClick={() => {
            console.log("Job-seekerrrrr");
          }}
        >
          As JobSeeker
        </Button>
        <Button
          style={{
            marginLeft: "3px",
            textTransform: "none",
            fontSize: "1.05rem",
          }}
          variant="outlined"
          onClick={() => {
            console.log("companyyyyy");
          }}
        >
          As Company
        </Button>
      </div>
    </div>
  );
}