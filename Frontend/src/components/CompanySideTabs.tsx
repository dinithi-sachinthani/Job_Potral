import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DynamicFeedRoundedIcon from "@mui/icons-material/DynamicFeedRounded";
import DomainVerificationRoundedIcon from "@mui/icons-material/DomainVerificationRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Divider from "@mui/material/Divider";

import ProfileTabPlane from "./ProfileTabPlane";
import FeedTabPlane from "./FeedTabPlane";
import ApplicationTabPlane from "./ApplicationTabPlane";
import Logo from "../assets/logo.jpeg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

type MyFunc = () => void;

interface TemporaryDrawerProps {
  handleFunc: MyFunc;
}

export const CompanySideTabs: React.FC<TemporaryDrawerProps> = ({
  handleFunc,
}) => {
  // export default function VerticalTabs: React.FC<TemporaryDrawerProps>({handleFunc}) {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "100%",
          width: "100%",
          borderRadius: "50px",
        }}
      >
        <Tabs
          orientation="vertical"
          // variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            "& .Mui-selected": {
              backgroundColor: "#f1f5f9",
            },
            width: "250px",
          }}
        >
          <Tab
            label={
              <>
                <img
                  src={Logo}
                  alt="logo"
                  style={{
                    height: 70,
                    marginTop: "10px",
                    marginBottom: "4px",
                  }}
                />
                <Divider style={{ width: "100%", marginTop: "15px" }} />
              </>
            }
            disabled
          />
          <Tab
            icon={<PersonRoundedIcon />}
            iconPosition="start"
            label="Profile"
            style={{ justifyContent: "start", textTransform: "none" }}
            {...a11yProps(0)}
          />
          <Tab
            icon={<DynamicFeedRoundedIcon />}
            iconPosition="start"
            label="Posts"
            style={{ justifyContent: "start", textTransform: "none" }}
            {...a11yProps(1)}
          />
          <Tab
            icon={<DomainVerificationRoundedIcon />}
            iconPosition="start"
            label="Applications"
            style={{ justifyContent: "start", textTransform: "none" }}
            {...a11yProps(2)}
          />
        </Tabs>
        <TabPanel value={value} index={1}>
          <ProfileTabPlane
            handleFunc={() => {
              console.log("Feed!!");
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FeedTabPlane
            isCompany={true}
            handleFunc={() => {
              console.log("Feed!!");
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ApplicationTabPlane
            isCompany={true}
            handleFunc={() => {
              console.log("Application!!");
            }}
          />
        </TabPanel>
      </Box>
    </>
  );
};
