import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Avatar from "@mui/material/Avatar";

import ProfAvatar from "../assets/profile-avatar.jpg";

type MyFunc = () => void;

interface CardProps {
  handleOpenModal: MyFunc;
  handleCloseModal: MyFunc;
}

const AddJobComp: React.FC<CardProps> = ({
  handleOpenModal,
  handleCloseModal,
}) => {
  return (
    <div
      className="add-job bg-gray-200 w-full h-fit mt-5 rounded p-4 px-14 flex flex-row"
      //   style={{ marginLeft: "16px" }}
    >
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
          handleOpenModal();
          console.log("Add Job!!!!.....");
        }}
        className="bg-gray-50 w-full ml-5 rounded-full flex flex-col justify-center pl-8 text-gray-600 my-auto"
        style={{ height: "50px" }}
      >
        <p>Add new post and hire jobseekers for Company Name...</p>
      </div>
      <div
        onClick={() => {
          handleOpenModal;
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
  );
};

export default AddJobComp;
