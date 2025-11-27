import './contact.scss';
import phone from '/assets/icons/phone-1.svg';
import mail from '/assets/icons/mail.svg';
import clock from '/assets/icons/clock.svg';
import MapComponent from "~/components/MapComponent";
import {useTranslation} from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="contact">
            <div className="contact-info">
                <h3>{t("ContactUs")}</h3>
                <h1>{t("contact-text")}</h1>
                <div className="contact-text">
                    <p>{t("contact-para-1")}</p>
                    <p>{t("contact-para-2")}</p>
                </div>
            </div>

            <div className="contact-content">
                <div className="contact-form">
                    <form className="form-contact">
                      <h2>{t("contact-form-text")}</h2>

                        {/*Name*/}
                      <label>
                          <span>{t("from-name")}</span>
                          <input type="text" placeholder={t("from-name-1")}/>
                      </label>
                         {/*Email*/}
                        <label>
                            <span>{t("from-email")}</span>
                            <input type="email" placeholder={t("from-email-1")}/>
                        </label>
                          {/*Phone Number*/}
                        <label>
                            <span>{t("from-phone")}</span>
                            <input type="number" placeholder="+971 XX XXX XXXX"/>
                        </label>
                        {/*Company / Organization*/}
                        <label>
                            <span>{t("from-company")}</span>
                            <input type="text" placeholder={t("from-company-1")}/>
                        </label>
                        {/*Subject*/}
                        <label>
                            <span>{t("from-subject")}</span>
                            <input type="text" placeholder={t("from-subject-1")}/>
                        </label>
                        {/*Message*/}
                        <label>
                            <span>{t("from-Message")}</span>
                            <textarea rows={5} placeholder={t("from-Message-1")}>
                            </textarea>
                        </label>

                        <button className="btn-contact" type="submit">
                            {t("Send-Message")}
                        </button>
                    </form>
                </div>

                <div className="contact-map">
                    <div className="info-contact">
                        <h2>{t("map-text")}</h2>
                        <ul>
                            <li>
                                <img src={phone} alt="phone"/>
                                <h5>+971 50 123 4567</h5>
                            </li>
                            <li>
                                <img src={mail} alt="phone"/>
                                <h5>contact@engineeringconsulting.ae</h5>
                            </li>
                            <li>
                                <img src={clock} alt="phone"/>
                                <h5>{t("map-time")}</h5>
                            </li>
                        </ul>
                    </div>

                    <div className="map-contact">
                        <MapComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact
