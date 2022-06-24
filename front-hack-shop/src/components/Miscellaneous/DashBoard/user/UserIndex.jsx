import SideBar from "../SideBar/SideBar";
import User from "./User";
import "./userindex.css";
const UserIndex = () => {
  return (
    <div>
      <div className="container">
        <SideBar />
        <User />
      </div>
    </div>
  );
};

export default UserIndex;
