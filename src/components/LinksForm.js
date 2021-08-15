import React, { useState, useEffect } from "react";
import { db } from "../firebase";


const LinksForm = (props) => {
  const initialStateValues = {
            nomb:'',
            iden:'',
            tel:'',
            dir:'',
            email:'',
            prog:'',
            per:'',
            trab:'',
            dif:'',
            sal:'',
            cont:'',
            contadd:'',
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addOrEditLink(values);
    setValues({ ...initialStateValues });

  };

  const getLinkById = async (id) => {
    const doc = await db.collection("Egresados").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(props.currentId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);

  return (

    <>

<a  id="btnnuevo" href="#openmodal2" className="botonb">{props.currentId === "" ? "Registrar" : "Editar"}</a>

    <div id="openmodal2" className="modalDialog">

          <div className="mod">

          <a href="#close" class="close">X</a>

          <p className="txtA">Información Egresados</p>

            <form id="formadd">

                <input id="id" type="hidden" />

          <table className="table2">

          <tr>
              <th className="th4">⠀Nombre Completo</th>
              <th className="th3"><input name="nomb" className="inp" type="text" value={values.nomb} onChange={handleInputChange}/></th>
          </tr>
          <tr>
              <th className="th4">⠀Identificación</th>
              <th className="th3"><input   name="iden" className="inp" type="text" value={values.iden} onChange={handleInputChange} /></th>
          </tr>
          <tr>
              <th className="th4">⠀Teléfono</th>
              <th className="th3"><input  name="tel"  className="inp" type="text" value={values.tel} onChange={handleInputChange} /></th>
          </tr>
          <tr>
              <th className="th4">⠀Dirección Actual</th>
              <th className="th3"><input  name="dir"  className="inp" type="text" value={values.dir} onChange={handleInputChange}/></th>
          </tr>
          <tr>
              <th className="th4">⠀Correo</th>
              <th className="th3"><input  name="email" className="inp" type="text" value={values.email} onChange={handleInputChange}/></th>
          </tr>
          <tr>
              <th className="th4">⠀Programa</th>
              <th className="th3"><input  name="prog" className="inp" type="text" value={values.prog} onChange={handleInputChange}/></th>
          </tr>
          <tr>
              <th className="th4">⠀Periodo de Egreso</th>
              <th className="th3"><input  name="per" className="inp" type="text" value={values.per} onChange={handleInputChange} /></th>
          </tr>
          <tr>
              <th className="th4">⠀Trabajo Enfocado a Egreso</th>
              <th className="th3"><input  name="trab" className="inp" type="text" value={values.trab} onChange={handleInputChange}/></th>
          </tr>
          <tr>
              <th className="th4">⠀Dificultad para Encontrar Trabajo</th>
              <th className="th3"><input name="dif" className="inp" type="text" value={values.dif} onChange={handleInputChange}/></th>
          </tr>
          <tr>
              <th className="th4">⠀Salario Base</th>
              <th className="th3"><input name="sal" className="inp" type="text" value={values.sal} onChange={handleInputChange}/></th>
          </tr>
          <tr>
              <th className="th4">⠀Tipo de Contrato</th>
              <th className="th3"><input  name="cont" className="inp" type="text" value={values.cont} onChange={handleInputChange}/></th>
          </tr>
          <tr>
              <th className="th4">⠀Contrato Adicional</th>
              <th className="th3"><input name="contadd" className="inp" type="text" value={values.contadd} onChange={handleInputChange}/></th>
          </tr>

          </table>

          <div>
          <button onClick={handleSubmit} type="submit" className="edi">{props.currentId === "" ? "Crear" : "Editar"}</button>
          </div>

          </form>
          </div>

        </div>
        </>
  )};

export default LinksForm;