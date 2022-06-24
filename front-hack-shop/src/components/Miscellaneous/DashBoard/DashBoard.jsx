import "./DashBoard.css";
import SideBar from "./SideBar/SideBar";
import Home from "./pages/home/Home";

const DashBoard = () => {
  return (
    <div>
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
};

export default DashBoard;
