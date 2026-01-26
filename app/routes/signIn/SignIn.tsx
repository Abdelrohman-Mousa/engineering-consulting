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
import toast from "react-hot-toast";

const SignIn = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // تسجيل الدخول ب الاميل و الباسورد
    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        if (loading) return; // تمنع الضغط المتكرر

        // ✅ حط الـ validation هنا
        if (!email || !password) {
            toast.error("Please fill in your email and password");
            return;
        }

        setLoading(true);
        const toastId = toast.loading("Creating account..."); // Sending toast

        try {
            await signup(email, password);
            toast.success("Account created successfully ✅", { id: toastId });
            navigate("/"); // الصفحة بعد تسجيل الدخول
        } catch (error: any) {
            toast.error(error.message || "An error occurred during registration ❌", { id: toastId });
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        const toastId = toast.loading("Logging in...");

        try {
            const user = await signInWithGoogle();

            // Redirect حسب الدور (Admin أو User)
            const snap = await getDoc(doc(db, "users", user.uid));
            const role = snap.exists() ? snap.data().role : "user";

            if (role === "admin") {
                toast.success("Logged in successfully (Admin) ✅", { id: toastId });
                navigate("/about");
            } else {
                toast.success("Logged in successfully ✅", { id: toastId });
                navigate("/"); // الصفحة الرئيسية للعملاء
            }
        } catch (err: any) {
            toast.error(err.message || "An error occurred during registration ❌", { id: toastId });
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
                        <button
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : t("signIn-button")}
                        </button>
                    </form>
                    <div className="divider">
                        <span>--------- {t("signIn-use")} --------- </span>
                    </div>

                    <div className="signIn-social">
                        <button
                            className="signIn-google"
                            onClick={handleGoogleLogin}
                            disabled={loading}
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
