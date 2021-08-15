import React, { useEffect, useState } from "react";
import LinksForm from "./LinksForm";
import "./Pages/estilo.egresados.css";
import user from '../utils/imagenes/user.png';
import { db } from "../firebase";

const Links = ({handleLogout}) => {

  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getLinks = async () => {
    db.collection("Egresados").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
    });
  };

  const onDeleteLink = async (id) => {
      await db.collection("Egresados").doc(id).delete();
    }

  useEffect(() => {
    getLinks();
  }, []);

  const addOrEditLink = async (linkObject) => {
    try {
      if (currentId === "") {
        await db.collection("Egresados").doc().set(linkObject);
      } else {
        await db.collection("Egresados").doc(currentId).update(linkObject);
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>

<div className="body1">

<div className="divA">
    <p className="txt2">Egresados</p>
    <button className="botonA">Busqueda por Id</button>
    <LinksForm {...{ addOrEditLink, currentId, links }} />
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

            {links.map((link) => (
              <>
          <tr className="tr" key={link.iden} >
          <th className="th2">{link.nomb} </th>
          <th className="th2">{link.iden} </th>
          <th className="th2">{link.email} </th>
          <th className="th2">{link.tel} </th>
          <th className="th2">
            <div className="flex">
            <div className="ed">
            <a onClick={() => setCurrentId(link.id)} className="a"> Editar</a>
            </div>
            <button onClick={() => onDeleteLink(link.id)} className="x">X</button>
            </div>
          </th>
        </tr>
            </>
        ))}
            </tbody>
        </table>

      {links.map((link) => (
        <div key={link.iden} id="openmodal" className="modalDialog">

          <div className="mod">

          <a href="#close" class="close">X</a>

          <p className="txtA">Información Egresados</p>

            <form id="formedit">

          <table className="table2">

          <tr>
              <th className="th4">⠀Nombre Completo</th>
              <th className="th3"><input name="nomb" className="inp" type="text" value={link.nomb} /></th>
          </tr>
          <tr>
              <th className="th4">⠀Identificación</th>
              <th className="th3"><input   name="iden" className="inp" type="text" value={link.iden} /></th>
          </tr>
          <tr>
              <th className="th4">⠀Teléfono</th>
              <th className="th3"><input  name="tel"  className="inp" type="text" value={link.tel} /></th>
          </tr>
          <tr>
              <th className="th4">⠀Dirección Actual</th>
              <th className="th3"><input  name="dir"  className="inp" type="text" value={link.dir} /></th>
          </tr>
          <tr>
              <th className="th4">⠀Correo</th>
              <th className="th3"><input  name="email" className="inp" type="text" value={link.email} /></th>
          </tr>
          <tr>
              <th className="th4">⠀Programa</th>
              <th className="th3"><input  name="prog" className="inp" type="text" value={link.prog} /></th>
          </tr>
          <tr>
              <th className="th4">⠀Periodo de Egreso</th>
              <th className="th3"><input  name="per" className="inp" type="text" value={link.per} /></th>
          </tr>
          <tr>
              <th className="th4">⠀Trabajo Enfocado a Egreso</th>
              <th className="th3"><input  name="trab" className="inp" type="text" value={link.trab} /></th>
          </tr>
          <tr>
              <th className="th4">⠀Dificultad para Encontrar Trabajo</th>
              <th className="th3"><input name="dif" className="inp" type="text" value={link.dif} /></th>
          </tr>
          <tr>
              <th className="th4">⠀Salario Base</th>
              <th className="th3"><input name="sal" className="inp" type="text" value={link.sal} /></th>
          </tr>
          <tr>
              <th className="th4">⠀Tipo de Contrato</th>
              <th className="th3"><input  name="cont" className="inp" type="text" value={link.cont} /></th>
          </tr>
          <tr>
              <th className="th4">⠀Contrato Adicional</th>
              <th className="th3"><input name="contadd" className="inp" type="text" value={link.contadd} /></th>
          </tr>

          </table>

          <div>
          <input onClick={() => setCurrentId(link.id)} type="button" className="edi" value="Editar"/>
          </div>

          </form>
          </div>

        </div>

        ))}

        </div>

</div>

    </>
  );
};

export default Links;