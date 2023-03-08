import React from "react";
import "../../src/App.css";
import { useState, useEffect } from "react";
import TopBar from "./TopBar";


function Users() {
  const [usuarios, setUsers] = useState([]);

  useEffect(() => {
    console.log("se monto el componente users");
    fetch("http://localhost:3001/api/usuarios")
    .then((response) => response.json())
      .then((data) => {
         //console.log(data);
        setUsers(data.data);
        //console.log(data.usuario)
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {console.log("se actualizo el componente");
  }, [usuarios]);

  useEffect(() => {
    return () => console.log("se desmonto el componente");
  }, []);
  //console.log(users);
  return (
    <React.Fragment>
      <TopBar />
    <div className="container">
      <h2 className="title">Listado de Usuarios</h2>
      
      <ul>
        {usuarios.length === 0 && <p>Cargando</p>}
        {usuarios.map((user, i) => {
          return (
            <div key={i} className="card">
              <br />
              <h2>ID de Usuario: {user.id}</h2>
              <h3>Nombre de Usuario: {user.nombre}</h3>
              <h3>Apellido de Usuario: {user.apellido}</h3>
              <h4>Email: {user.email}</h4>
              <a className="App-link" href={`/users/${user.id}`}>
                Ver Usuario
              </a>
              <br />
            </div>
          );
        })}
      </ul>

      <a className="App-link-volver" href={`/`}>
        Volver al Home
      </a>
    </div>
    </React.Fragment>
  );
}

export default Users;