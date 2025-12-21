import "./signIn.scss";
import logo from "/assets/icons/logo.svg";
import sign from "/assets/icons/sign.svg";
import google from "/assets/icons/google.svg"
import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";
import {useState} from "react";
import { signup } from "src/auth/authService";
import {useNavigate} from "react-router";
import { signInWithGoogle } from "/src/auth/signInWithGoogle";
import {doc, getDoc} from "@firebase/firestore";
import { db } from "/src/config/firebase"

const SignIn = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    // تسجيل الدخول ب الاميل و الباسورد
    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            await signup(email, password);
            navigate("/");   //الصفحة اللي الموقع هيروح عليها بعد تسجيل الدخول

        } catch (error) {
            alert(error.message)
        }
    };

    // تسجيل الدخول ب جوجل
    const handleGoogleLogin = async () => {
        try {
            const user = await signInWithGoogle();

            // Redirect حسب الدور (Admin أو User)
            const snap = await getDoc(doc(db, "users", user.uid));
            const role = snap.exists() ? snap.data().role : "user";

            if (role === "admin") {
                navigate("/about");
            } else {
                navigate("/"); // الصفحة الرئيسية للعملاء
            }

        } catch (err) {
            alert(err.message);
        }
    };


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
                    <form
                        className="signIn-form-content"
                        onSubmit={handleSignup}
                    >
                        <input
                            type="email"
                            value={email}
                            placeholder={t("email")}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder={t("password")}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">{t("signIn-button")}</button>
                    </form>
                    <div className="divider">
                        <span>--------- {t("signIn-use")} --------- </span>
                    </div>

                    <div className="signIn-social">
                        <button
                            className="signIn-google"
                            onClick={handleGoogleLogin}
                        >
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
