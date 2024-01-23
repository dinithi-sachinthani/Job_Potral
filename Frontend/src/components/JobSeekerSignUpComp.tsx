import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

type MyFunc = () => void;

interface CustomizedDialogsProps {
  handleClose: MyFunc;
  open: boolean;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const JobSeekerSignUpComp: React.FC<CustomizedDialogsProps> = ({
  handleClose,
  open,
}) => {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Sign Up As Job Seeker
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers style={{ width: "448px" }}>
          <div style={{ width: "416px" }}>
            <TextField
              id="outlined-basic"
              label="Firstname"
              variant="outlined"
              size="small"
              style={{
                width: "208px",
                paddingBottom: "10px",
                paddingRight: "10px",
              }}
            />
            <TextField
              id="outlined-basic"
              label="Lastname"
              variant="outlined"
              size="small"
              style={{ width: "208px", paddingBottom: "10px" }}
            />
          </div>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            size="small"
            style={{ width: "416px", paddingBottom: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            style={{ width: "416px", paddingBottom: "10px" }}
          />
          <div style={{ width: "416px" }}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  label="Controlled picker"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider> */}
          </div>
          <TextField
            id="outlined-basic"
            label="Telephone"
            variant="outlined"
            size="small"
            style={{ width: "416px", paddingBottom: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
            style={{ width: "416px", paddingBottom: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            size="small"
            style={{ width: "416px", paddingBottom: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Education"
            variant="outlined"
            size="small"
            style={{ width: "416px", paddingBottom: "10px" }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Bio"
            multiline
            rows={2}
            style={{ width: "416px", paddingBottom: "10px" }}
          />
          <TextField
            id="outlined-multiline-static"
            label="About Me"
            multiline
            rows={2}
            style={{ width: "416px", paddingBottom: "10px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus style={{ width: "100%" }} onClick={handleClose}>
            Sign up
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};
