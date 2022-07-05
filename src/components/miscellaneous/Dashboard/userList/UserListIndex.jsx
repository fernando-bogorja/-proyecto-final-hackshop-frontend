import SideBar from "../SideBar/SideBar";
import UserList from "./userList";
const UserListIndex = () => {
  return (
    <div>
      <div className="container">
        <SideBar />
        <UserList />
      </div>
    </div>
  );
};

export default UserListIndex;
