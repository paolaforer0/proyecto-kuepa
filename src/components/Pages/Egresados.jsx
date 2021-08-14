import React, {useState} from 'react';
import "./estilo.egresados.css";
import user from '../../utils/imagenes/user.png';

const Egresados = ({handleLogout}) => {

    return (

        <div className="body1">

    <div className="divA">
        <p className="txt2">Egresados</p>
        <button className="botonA">Busqueda por Id</button>
        <a id="btnnuevo" href="#openmodal2" className="botonb">Registrar</a>
        <button className="botonc" onClick={handleLogout}>Cerrar Sesión</button>
        <img className="img" src={user} alt="User" />
    </div>

    <div>

        <table className="table">
            <thead>
            <tr>
              <th className="th">Nombre</th>
              <th className="th">Id</th>
              <th className="th">Correo</th>
              <th className="th">Teléfono</th>
              <th className="th">Opciones</th>
            </tr>
            </thead>

            <tbody id="bodyEgresados">

            <tr className="tr">
              <th className="th2">Pedro Pablo Guevara Torres</th>
              <th className="th2">0000000</th>
              <th className="th2">@mail.com</th>
              <th className="th2">0000000000</th>
              <th className="th2">
                <div className="flex">
                <div className="ed">
                <a id="" href="#openmodal" className="a"> Editar</a>
                </div>
                <button className="x">X</button>
                </div>
              </th>
            </tr>
            </tbody>
        </table>

        </div>

        <div id="openmodal" className="modalDialog">

          <div className="mod">

          <a href="#close" class="close">X</a>

          <p className="txtA">Información Egresados</p>

            <form id="formedit">

            <input id="id2" type="hidden" />

          <table className="table2">

          <tr>
              <th className="th4">⠀Nombre Completo</th>
              <th className="th3"><input name="nomb" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Identificación</th>
              <th className="th3"><input   name="iden" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Teléfono</th>
              <th className="th3"><input  name="tel"  className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Dirección Actual</th>
              <th className="th3"><input  name="dir"  className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Correo</th>
              <th className="th3"><input  name="email" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Programa</th>
              <th className="th3"><input  name="prog" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Periodo de Egreso</th>
              <th className="th3"><input  name="per" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Trabajo Enfocado a Egreso</th>
              <th className="th3"><input  name="trab" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Dificultad para Encontrar Trabajo</th>
              <th className="th3"><input name="dif" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Salario Base</th>
              <th className="th3"><input name="sal" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Tipo de Contrato</th>
              <th className="th3"><input  name="cont" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Contrato Adicional</th>
              <th className="th3"><input name="contadd" className="inp" type="text" /></th>
          </tr>

          </table>

          <div>
          <input type="submit" className="edi" value="Editar"/>
          </div>

          </form>
          </div>

        </div>


        <div id="openmodal2" className="modalDialog">

          <div className="mod">

          <a href="#close" class="close">X</a>

          <p className="txtA">Información Egresados</p>

            <form id="formadd">

                <input id="id" type="hidden" />

          <table className="table2">

          <tr>
              <th className="th4">⠀Nombre Completo</th>
              <th className="th3"><input name="nomb" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Identificación</th>
              <th className="th3"><input   name="iden" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Teléfono</th>
              <th className="th3"><input  name="tel"  className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Dirección Actual</th>
              <th className="th3"><input  name="dir"  className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Correo</th>
              <th className="th3"><input  name="email" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Programa</th>
              <th className="th3"><input  name="prog" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Periodo de Egreso</th>
              <th className="th3"><input  name="per" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Trabajo Enfocado a Egreso</th>
              <th className="th3"><input  name="trab" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Dificultad para Encontrar Trabajo</th>
              <th className="th3"><input name="dif" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Salario Base</th>
              <th className="th3"><input name="sal" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Tipo de Contrato</th>
              <th className="th3"><input  name="cont" className="inp" type="text" /></th>
          </tr>
          <tr>
              <th className="th4">⠀Contrato Adicional</th>
              <th className="th3"><input name="contadd" className="inp" type="text" /></th>
          </tr>

          </table>

          <div>
          <input type="submit" className="edi" value="Agregar"/>
          </div>

          </form>
          </div>

        </div>

</div>
    );
}

export default Egresados;
