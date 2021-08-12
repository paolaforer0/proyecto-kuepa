import logo from '../../utils/imagenes/kuepa_logo.png'
import './estilo.header.css'

function Header() {
    return (

        <div class="body">

                <div class="cont1">

                    <div class="header">

                         <img class="logo" src={logo} alt="Kuepa logo" />

                    </div>

                </div>
        </div>

    );
  }

export default Header;