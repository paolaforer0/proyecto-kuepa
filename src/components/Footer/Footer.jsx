import logo from '../../utils/imagenes/kuepa_logo.png'
import './estilo.footer.css'

function Footer() {
    return (

<div className="body3">

    <footer>

        <div className="footer">
           <img className="logo1" src={logo} alt="Kuepa logo" />
           <p className="p">Copyright© Kuepa 2021</p>
        </div>

    </footer>

</div>
    );
  }
  export default Footer;