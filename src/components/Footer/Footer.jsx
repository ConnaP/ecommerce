import "./Footer.css";
import { configRuteFile } from "../../routes/configRuteFile";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="comun">
          <p className="letras-negras">Hablemos</p>
          <a href="#">Contacto</a>
          <a href="#">Ayuda</a>
          <a href="#">Trabaja con nosotros</a>
        </div>

        <div className="comun">
          <p className="letras-negras">Legal</p>
          <a href="#">Privacidad</a>
          <a href="#">Terminos y condiciones</a>
          <a href="#">Código ético</a>
        </div>
        <div className="comun icon-redes-sociales">
          <p className="letras-negras">¡Síguenos!</p>
          <div className="circulo2">
            <img
              className="img-redessociales"
              src={configRuteFile("icon-instagram.png")}
              alt=""
            />
          </div>

          <div className="circulo2">
            <img
              className="img-redessociales"
              src={configRuteFile("icon-facebook.png")}
              alt=""
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
