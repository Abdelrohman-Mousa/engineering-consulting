import './navbar.scss';
import logo from "../../../public/assets/icons/logo.svg";
import darkMode from "../../../public/assets/icons/dark-mode.svg";
import lightMode from "../../../public/assets/icons/light-mode.svg";
import {ShinyButton} from "~/components/ui/shiny-button";
import ButtonLanguages from "../../../src/material-ui/ButtonLanguages";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import TemporaryDrawer from "~/components/sidebar/TemporaryDrawer";

const Navbar = () => {
    const { t } = useTranslation();

    const [isClient, setIsClient] = useState(false);
    const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        setIsClient(true);

        // نجيب الوضع من localStorage لو موجود
        const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark' | null;
        if (savedMode) {
            setThemeMode(savedMode);
            if (savedMode === 'dark') {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        }
    }, []);

    const toggleTheme = () => {
        const newMode = themeMode === 'light' ? 'dark' : 'light';
        setThemeMode(newMode);
        localStorage.setItem('themeMode', newMode);

        if (newMode === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    };

    if (!isClient) return null; // أو Skeleton Loader

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
                <h3 className="title-logo" dangerouslySetInnerHTML={{ __html: t("logo") }}></h3>
            </div>

            <div className="links-pages">
                <ul>
                    <li><a href="#">{t("HomePage")}</a></li>
                    <li><a href="#">{t("AboutUS")}</a></li>
                    <li><a href="#">{t("OurProjects")}</a></li>
                    <li><a href="#">{t("OurServices")}</a></li>
                    <li><a href="#">{t("ContactUS")}</a></li>
                </ul>
            </div>

            <div className="settings">
                <div className="lang">
                    <ButtonLanguages />
                </div>

                <div className="mode" onClick={toggleTheme} >
                    <img src={themeMode === 'light' ? darkMode : lightMode} alt="mode"/>
                </div>

                <ShinyButton className="signIn">{t("signIn")}</ShinyButton>

                {/*Sidebar-Menu*/}
                <div className="sidebar-menu">
                    <TemporaryDrawer />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
