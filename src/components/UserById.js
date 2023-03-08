import React from "react";
import "../../src/App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserById() {
  const params = useParams();
  // console.log(params);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/usuarios/detail/${params.id}`)
      .then((response) => response.json())
      .then((user) => {
        setUserData(user.data);
        console.log(user.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //console.log(userData)

  return (
    <div>
      <h2 className="title">Detalle de Usuario</h2>

      <nav className="card">
        <h2>Id de Usuario:</h2>
        <h2>{userData.id}</h2>
        <h3>Nombre de Usuario:</h3>
        <h3>{userData.nombre}</h3>
        <h3>Apellido de Usuario:</h3>
        <h3>{userData.apellido}</h3>
        <h4>Email:</h4>
        <h4>{userData.email}</h4>
      </nav>

      <br />
      <br />
      <div class="links-container">
        <a href={`/users`}>Volver a Usuarios</a>
        <a href={`/`}>Volver al Home</a>
      </div>
    </div>
  );
}

export default UserById;