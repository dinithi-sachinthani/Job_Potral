import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import ProfAvatar from "../assets/profile-avatar.jpg";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import MenuComponent from "../components/MenuComponent";
import CompanySideTabs from "../components/CompanySideTabs";

export default function CompanyProfile() {
  return (
    <>
      <div className="relative bg-neutral-200 h-screen pt-14 flex flex-col justify-center">
        <div className="menu-bar w-full h-14 bg-slate-50 flex flex-row fixed top-0 left-0 justify-between px-20 z-10">
          <Link to="/">
            <img src={Logo} alt="logo" style={{ height: 50 }} />
          </Link>
          <div className="avatar my-auto flex flex-row">
            <Avatar alt="Remy Sharp" src={ProfAvatar} />
            <MenuComponent />
          </div>
        </div>
        <div className="h-full w-full bg-white rounded">
          <CompanySideTabs />
        </div>
      </div>
    </>
  );
}
