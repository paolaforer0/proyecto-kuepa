import React from 'react';
import derecho from '../../utils/imagenes/image_3.png'
import Egresados from '../Pages/Egresados.jsx';
import './index.css'

const Home = (props) => {

  const {   email,
            setEmail,
            password,
            setPassword,
            handleLogin,
            handleSingup,
            hasAccount,
            setHasAccount,
            emailError,
            passwordError
        } = props;

    return (

        <section className="body">

            <div className="cont1">

               <div className="div">

                  <p className="inicio">Iniciar Sesión</p>

                  <p className="txt1">Nombre de Usuario</p>

                  <input on className="barra" type="text" name="User" required autoFocus value={email} onChange={e => setEmail(e.target.value)}/>

                  <p className="errorMsg">{emailError}</p>

                  <p className="txt1">Contraseña</p>

                  <input className="barra" type="password" name="Pass" required value={password} onChange={e => setPassword(e.target.value)}/>

                  <p className="errorMsg">{passwordError}</p>

                  <div>
                        <button onClick={handleLogin} className="boton">Iniciar Sesión</button>
                  </div>

                 </div>

                  <div className="esq">
                      <img className="img1" src={derecho} alt="kuepa" />
                 </div>
            </div>

        </section>
   );
}
export default Home;