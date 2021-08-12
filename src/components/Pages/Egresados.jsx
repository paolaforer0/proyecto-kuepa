import React from 'react';
import "./estilo.egresados.css";
import user from '../../utils/imagenes/user.png'


const Egresados = ({handleLogout}) => {
    return (
        <div className="body1">

    <div className="divA">
        <p className="txt2">Egresados</p>
        <button className="botonA">Busqueda por Id</button>
        <button className="botonb">Registro</button>
        <button className="botonc" onClick={handleLogout}>Cerrar Sesión</button>
        <img className="img" src={user} alt="User" />
    </div>

    <div>

        <table className="table">
            <tr>
              <th className="th">Nombre</th>
              <th className="th">Id</th>
              <th className="th">Correo</th>
              <th className="th">Teléfono</th>
              <th className="th">Opciones</th>
            </tr>

            <tr className="tr">
              <th className="th2">Pedro Pablo Guevara Torres</th>
              <th className="th2">0000000</th>
              <th className="th2">@mail.com</th>
              <th className="th2">0000000000</th>
              <th className="th2">
                <button className="ed">Editar</button>
                <button className="x">X</button>
              </th>
            </tr>

        </table>

        </div>
</div>
    );
}

export default Egresados;