import "./user.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarToday from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";
const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              className="userShowImg"
              src="https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png"
              alt=""
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Juan Perez</span>
              <span className="userShowUserTitle">Milanesologo</span>
            </div>
          </div>

          <div className="userShowBottom">
            <span className="userShowTitle">Detalles de Cuenta</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">JuanPerezito</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contacto</span>
            <div className="userShowInfo">
              <PhoneAndroidIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+598 44 55 66</span>
            </div>
            <div className="userShowInfo">
              <MailOutlineIcon className="userShowIcon" />
              <span className="userShowInfoTitle">juanperez@perez.com</span>
            </div>
            <div className="userShowInfo">
              <HomeIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Milanesa | Uruguay</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="JuanPerezito"
                />
              </div>
              <div className="userUpdateItem">
                <label>Nombre Completo</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Juan Perez"
                />
              </div>
              <div className="userUpdateItem">
                <label>Telefono</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="+598 44 55 66"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="juanperez@perez.com"
                />
              </div>
              <div className="userUpdateItem">
                <label>Locacion</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Milanesa | Uruguay"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png"
                  alt=""
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
