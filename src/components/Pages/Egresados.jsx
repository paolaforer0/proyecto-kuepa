
import firebase from '../../firebase';
import fire from '../../firebase';
import React, {useState, Component} from 'react';
import "./estilo.egresados.css";
import user from '../../utils/imagenes/user.png';

class Egresados extends Component {

    state={
        data: [],
        modalInsertar: false,
        form:{
            nomb:'',
            iden:'',
            email:'',
            tel:''
        }

    }

    handleLogout = () => {
        fire.auth().signOut();
     };

    peticionGet=()=>{

      firebase.database().ref().child("egresados").on("value", (egresado) =>{
            if(egresado.val()!== null){
                this.setState({ ...this.state.data, data: egresado.val()});
            }else{
                this.setState({data:[]});
            }
        });
    }

    peticionPost=()=>{
        firebase.database().ref().child("egresados").push(this.state.form,
           error=>{
                if(error)console.log(error)
           });
    }

    handleChange=e=>{
        this.setState({form:{
            ...this.state.form,
            [e.target.name]: e.target.value
        }})
        console.log(this.state.form);
    }

    componentDidMount(){
        this.peticionGet();
    }

    render() {
        return (
            <div>
                <div className="body1">

<div className="divA">
    <p className="txt2">Egresados</p>
    <button className="botonA">Busqueda por Id</button>
    <a id="btnnuevo" href="#openmodal2" className="botonb">Registrar</a>
    <button onclick={()=>this.handleLogout()} className="botonc" >Cerrar Sesión</button>
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

        <tbody>
            {Object.keys(this.state.data).map(i=>{
                return <tr key={i}>
                    <td>{this.state.data[i].nomb}</td>
                    <td>{this.state.data[i].iden}</td>
                    <td>{this.state.data[i].email}</td>
                    <td>{this.state.data[i].tel}</td>
                    <td>
                        <button>Editar</button> {" "}
                        <button>x</button>
                    </td>
                </tr>
            })}
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
            <tbody>
      <tr>
          <th className="th4">⠀Nombre Completo</th>
          <th className="th3"><input name="nomb" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Identificación</th>
          <th className="th3"><input   name="iden" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Teléfono</th>
          <th className="th3"><input  name="tel"  className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Dirección Actual</th>
          <th className="th3"><input  name="dir"  className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Correo</th>
          <th className="th3"><input  name="email" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Programa</th>
          <th className="th3"><input  name="prog" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Periodo de Egreso</th>
          <th className="th3"><input  name="per" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Trabajo Enfocado a Egreso</th>
          <th className="th3"><input  name="trab" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Dificultad para Encontrar Trabajo</th>
          <th className="th3"><input name="dif" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Salario Base</th>
          <th className="th3"><input name="sal" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Tipo de Contrato</th>
          <th className="th3"><input  name="cont" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Contrato Adicional</th>
          <th className="th3"><input name="contadd" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      </tbody>
      </table>

      <div>
      <input onclick={()=>this.peticionPost()} type="submit" className="edi" value="Editar"/>
      </div>

      </form>
      </div>

    </div>


    <div isOpen={this.state.modalInsertar} id="openmodal2" className="modalDialog">

      <div className="mod">

      <a href="#close" class="close">X</a>

      <p className="txtA">Información Egresados</p>

        <form id="formadd">

            <input id="id" type="hidden" />

      <table className="table2">

      <tr>
          <th className="th4">⠀Nombre Completo</th>
          <th className="th3"><input name="nomb" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Identificación</th>
          <th className="th3"><input   name="iden" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Teléfono</th>
          <th className="th3"><input  name="tel"  className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Dirección Actual</th>
          <th className="th3"><input  name="dir"  className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Correo</th>
          <th className="th3"><input  name="email" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Programa</th>
          <th className="th3"><input  name="prog" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Periodo de Egreso</th>
          <th className="th3"><input  name="per" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Trabajo Enfocado a Egreso</th>
          <th className="th3"><input  name="trab" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Dificultad para Encontrar Trabajo</th>
          <th className="th3"><input name="dif" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Salario Base</th>
          <th className="th3"><input name="sal" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Tipo de Contrato</th>
          <th className="th3"><input  name="cont" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>
      <tr>
          <th className="th4">⠀Contrato Adicional</th>
          <th className="th3"><input name="contadd" className="inp" type="text" onChange={this.handleChange}/></th>
      </tr>

      </table>

      <div>
      <input onclick={()=>this.peticionPost()} type="submit" className="edi" value="Agregar"/>
      </div>

      </form>
      </div>

    </div>

</div>
            </div>
        )
    }
}


export default Egresados;