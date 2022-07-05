import SideBar from "../SideBar/SideBar";
import NewUser from "./NewUser";
import "./newUserIndex.css";
const NewUserIndex = () => {
  return (
    <div className="container">
      <SideBar />
      <NewUser />
    </div>
  );
};

export default NewUserIndex;
