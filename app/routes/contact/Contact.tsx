import './contact.scss';
import phone from '/assets/icons/phone-1.svg';
import mail from '/assets/icons/mail.svg';
import clock from '/assets/icons/clock.svg';
import MapComponent from "~/components/MapComponent";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {addMessage} from "../../../src/auth/addMessage";
import toast from "react-hot-toast";


const Contact = () => {
    const { t } = useTranslation();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
            name: "",
            email: "",
            phone: "",
            subject: "",
            company: "",
            message: "",
        });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (loading) return;

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in your name, email address, and message.");
            return;
        }

        setLoading(true);

        const toastId = toast.loading("Sending the message...");

        try {
            const res = await addMessage(formData);

            if (res.success) {
                toast.success("Message sent successfully ✅", {
                    id: toastId,
                });

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    company: "",
                    message: "",
                });
            } else {
                toast.error("Failed to send the message, please try again", {
                    id: toastId,
                });
            }
        } catch (error) {
            toast.error("An unexpected error occurred ❌", {
                id: toastId,
            });
        } finally {
            setLoading(false);
        }
    };


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
                    {/*==========form===========*/}
                    <form className="form-contact" onSubmit={handleSubmit}>
                      <h2>{t("contact-form-text")}</h2>

                        {/*Name*/}
                      <label>
                          <span>{t("from-name")}</span>
                          <input
                              type="text"
                              placeholder={t("from-name-1")}
                              onChange={e =>
                                  setFormData({ ...formData, name: e.target.value })
                              }
                          />
                      </label>
                         {/*Email*/}
                        <label>
                            <span>{t("from-email")}</span>
                            <input
                                type="email"
                                placeholder={t("from-email-1")}
                                onChange={e =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </label>
                          {/*Phone Number*/}
                        <label>
                            <span>{t("from-phone")}</span>
                            <input
                                type="number"
                                placeholder="+971 XX XXX XXXX"
                                onChange={e =>
                                    setFormData({ ...formData, phone: e.target.value })
                                }
                            />
                        </label>
                        {/*Company / Organization*/}
                        <label>
                            <span>{t("from-company")}</span>
                            <input
                                type="text"
                                placeholder={t("from-company-1")}
                                onChange={e =>
                                    setFormData({ ...formData, company: e.target.value })
                                }
                            />
                        </label>
                        {/*Subject*/}
                        <label>
                            <span>{t("from-subject")}</span>
                            <input
                                type="text"
                                placeholder={t("from-subject-1")}
                                onChange={e =>
                                    setFormData({ ...formData, subject: e.target.value })
                                }
                            />
                        </label>
                        {/*Message*/}
                        <label>
                            <span>{t("from-Message")}</span>
                            <textarea
                                rows={5}
                                placeholder={t("from-Message-1")}
                                onChange={e =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                            >
                            </textarea>
                        </label>

                        <button className="btn-contact" type="submit" disabled={loading}>
                            { loading ? "Sending..." : t("Send-Message")}
                        </button>
                    </form>
                    {/*---------------form---------------*/}
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
};
export default Contact;
