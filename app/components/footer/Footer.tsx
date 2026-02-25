import './footer.scss';
import logo from "/assets/icons/logo.svg";
import email from "/assets/icons/email-1.svg";
import phone from "/assets/icons/phone-1.svg";
import location from "/assets/icons/location-1.svg";
import facebook from "/assets/icons/facebook-1.svg";
import linkedin from "/assets/icons/linkedin-1.svg";
import insta from "/assets/icons/instagram-2.svg";
import { Link } from "react-router-dom";


import {useTranslation} from "react-i18next";
import {ShinyButton} from "~/components/ui/shiny-button";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <div className="images">
                        <img src={logo} alt="logo" />
                        <h3 dangerouslySetInnerHTML={{ __html: t("logo") }} />
                    </div>
                    <p className="footer-para">{t("footer-pra")}</p>
                    <Link to="/consultationRequest">
                        <ShinyButton className="footer-button">{t("footer-btn")}</ShinyButton>
                    </Link>
                </div>

                <div className="footer-links">
                    <h3>{t("footer-links")}</h3>
                    <ul>
                        <Link to="/about">
                            <li> {t("footer-links-1")}</li>
                        </Link>
                        <Link to="/consultationRequest">
                            <li> {t("OurServices")} </li>
                        </Link>
                        <Link to="/projects">
                            <li>{t("footer-links-3")}</li>
                        </Link>
                        <Link to="/contact">
                            <li>{t("ContactUS")}</li>
                        </Link>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>{t("footer-contact")}</h3>
                    <ul>
                        <li>
                            <img src={email} alt="phone"/>
                            <span>contact@engineeringconsulting.ae</span>
                        </li>
                        <li>
                            <img src={phone} alt="phone"/>
                            <span>+971 50 123 456</span>
                        </li>
                        <li>
                            <img src={location} alt="phone"/>
                            <span>Burj Khalifa - Downtown Dubai - Dubai</span>
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div className="footer-connect">
                    <h3>{t("footer-contact")}</h3>
                    <ul>
                        <li>
                            <a href="#">
                                <img src={facebook} alt="facebook"/>
                                <span>{t("footer-social-1")}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={insta} alt="facebook"/>
                                <span>{t("footer-social-2")}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                              <img src={linkedin} alt="facebook"/>
                              <span>{t("footer-social-3")}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="all-right">
                <h2>{t("all-rights")}</h2>
            </div>
        </div>
    )
}
export default Footer
