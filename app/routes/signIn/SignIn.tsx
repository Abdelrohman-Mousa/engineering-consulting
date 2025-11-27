import "./signIn.scss";
import logo from "/assets/icons/logo.svg";
import sign from "/assets/icons/sign.svg";
import google from "/assets/icons/google.svg"
import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";
const SignIn = () => {
    const { t } = useTranslation();

    return (
        <div className="signInPage">
            <Link to="/">
              <div className="signIn-logo">
                <img src={logo} alt="logo"/>
                 <h3 className="title-logo" dangerouslySetInnerHTML={{ __html: t("logo") }} />
              </div>
            </Link>

            <div className="signIn-form">
                <div className="signIn-content">
                    <div className="image">
                        <img src={sign} alt="signin"/>
                    </div>

                    <div className="text">
                        <h1>{t("signIn-text")}</h1>
                        <p>{t("signIn-para")}</p>
                    </div>
                    <form className="signIn-form-content">
                        <input type="email" placeholder={t("email")}/>
                        <input type="password" placeholder={t("password")}/>
                        <button type="submit">{t("signIn-button")}</button>
                    </form>
                    <div className="divider">
                        <span>--------- {t("signIn-use")} --------- </span>
                    </div>

                    <div className="signIn-social">
                        <button className="signIn-google">
                            <img src={google} alt="google"/>
                            <span>{t("signIn-google")}</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SignIn
