import Logo from "../assets/dummy-logo.png";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function Login() {
  return (
    <div className="relative bg-neutral-200 h-screen pt-14 flex flex-row justify-start">
      <div className="menu-bar w-full h-14 bg-slate-50 flex flex-row fixed top-0 left-0 justify-between px-20">
        <img src={Logo} alt="dummy-logo" style={{ height: 50 }} />
        {/* <div className="avatar my-auto flex flex-row">
          <Avatar alt="Remy Sharp" src={ProfAvatar} />
          <MenuComponent />
        </div> */}
      </div>
      <div className="left-side h-full w-3/5 flex flex-col justify-center">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={Logo} alt="dummy-logo" style={{ width: "75%" }} />
        </div>
        <p className="font-sans text-center text-3xl font-normal w-3/5 mx-auto">
          Unleash your potential, embrace the extraodinary test
        </p>
      </div>
      <div className="right-side bg-black w-2/5 flex flex-col justify-center items-center">
        <div className="login-box bg-white w-4/5 h-4/6 flex flex-col items-center py-5 rounded">
          <p className="text-center text-4xl font-medium mb-10">Log in</p>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            size="small"
            style={{ width: "416px", paddingBottom: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
            style={{ width: "416px", paddingBottom: "40px" }}
          />
          <Button
            autoFocus
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              width: "416px",
              marginBottom: "20px",
            }}
            onClick={() => {
              console.log("test");
            }}
          >
            login
          </Button>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Forgotten password?
          </Link>
          <Button
            variant="outlined"
            autoFocus
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              width: "416px",
              marginBottom: "20px",
            }}
            onClick={() => {
              console.log("test");
            }}
          >
            Create new Account
          </Button>
        </div>
      </div>
    </div>
  );
}
