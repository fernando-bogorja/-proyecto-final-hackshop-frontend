import SideBar from "../SideBar/SideBar";
import UserList from "./UserList";
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
