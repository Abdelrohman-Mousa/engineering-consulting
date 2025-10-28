import './navbar.scss';
import logo from "../../../public/assets/icons/logo.svg";
import darkMode from "../../../public/assets/icons/dark-mode.svg";
import lightMode from "../../../public/assets/icons/light-mode.svg";
import { ShinyButton } from "~/components/ui/shiny-button";
import ButtonLanguages from "../../../src/material-ui/ButtonLanguages";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import TemporaryDrawer from "~/components/sidebar/TemporaryDrawer";
import { Link, useLocation } from "react-router"; // ← مهم جدًا

const Navbar = () => {
    const { t } = useTranslation();
    const location = useLocation(); // ← عشان نعرف الصفحة الحالية

    const [isClient, setIsClient] = useState(false);
    const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        setIsClient(true);
        const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark' | null;
        if (savedMode) {
            setThemeMode(savedMode);
            document.body.classList.toggle('dark', savedMode === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newMode = themeMode === 'light' ? 'dark' : 'light';
        setThemeMode(newMode);
        localStorage.setItem('themeMode', newMode);
        document.body.classList.toggle('dark', newMode === 'dark');
    };

    if (!isClient) return null;

    const links = [
        { path: "/", label: t("HomePage") },
        { path: "/about", label: t("AboutUS") },
        { path: "/projects", label: t("OurProjects") },
        { path: "/services", label: t("OurServices") },
        { path: "/contact", label: t("ContactUS") },
    ];

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
                <h3 className="title-logo" dangerouslySetInnerHTML={{ __html: t("logo") }} />
            </div>

            <div className="links-pages">
                <ul>
                    {links.map(link => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={location.pathname === link.path ? "active" : ""}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="settings">
                <div className="lang">
                    <ButtonLanguages />
                </div>

                <div className="mode" onClick={toggleTheme}>
                    <img src={themeMode === 'light' ? darkMode : lightMode} alt="mode" />
                </div>
                <Link to="/signin">
                    <ShinyButton className="signIn">{t("signIn")}</ShinyButton>
                </Link>

                {/* Sidebar Menu */}
                <div className="sidebar-menu">
                    <TemporaryDrawer />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
