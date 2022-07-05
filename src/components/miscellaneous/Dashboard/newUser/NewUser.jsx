import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nuevo Usuario</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="JuanPerezito" />
        </div>
        <div className="newUserItem">
          <label htmlFor="nombreCompleto">Nombre Completo</label>
          <input type="text" id="nombreCompleto" placeholder="Juan Perez" />
        </div>
        <div className="newUserItem">
          <label htmlFor="telefono">Telefono</label>
          <input type="text" id="telefono" placeholder="+598 44 55 66" />
        </div>
        <div className="newUserItem">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="juanperez@perez.com" />
        </div>
        <div className="newUserItem">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" placeholder="Password" />
        </div>
        <div className="newUserItem">
          <label htmlFor="locacion">Locacion</label>
          <input type="text" id="locacion" placeholder="Milanesa | Uruguay" />
        </div>
        <div className="newUserItem">
          <label>Genero</label>
          <div className="newUserGender">
            <input
              type="radio"
              name="genero"
              id="masculino"
              value="masculino"
            />
            <label htmlFor="masculino">Masculino</label>
            <input type="radio" name="genero" id="femenino" value="femenino" />
            <label htmlFor="femenino">Femenino</label>
            <input type="radio" name="genero" id="otro" value="otro" />
            <label htmlFor="otro">Otro</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="activo">Activo</label>
          <select name="activo" id="activo" className="newUserSelect">
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
