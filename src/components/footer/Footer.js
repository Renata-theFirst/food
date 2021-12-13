import './Footer.css';
import veg from '../../resources/icons/veg.svg';

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="social">
                    <div className="subtitle">
                        Мы в социальных сетях:
                    </div>
                    <a href="https://www.instagram.com/" className="link">instagram</a>
                    <a href="https://www.facebook.com/" className="link">facebook</a>
                </div>
                <div className="pepper">
                    <img src={veg} alt="pepper"/>
                </div>
                <div className="call">
                    <div className="subtitle">
                        Или позвоните нам
                    </div>
                    <a href="/" className="link">+78004005005</a>
                    <a href="/" className="link">+78003007007</a>
                </div>
            </div>
        </div>
    );

}

export default Footer;