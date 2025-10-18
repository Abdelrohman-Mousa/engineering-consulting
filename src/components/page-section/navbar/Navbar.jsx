import logo from '../../../assets/icons/logo.svg';
import darkModeLogo from '../../../assets/icons/dark-modeLogo.svg';
import lightModeLogo from '../../../assets/icons/light-modeLogo.svg';
import './navbar.scss';
import LanguagesMenu from '../../materialUI/LanguagesMenu';
import { ShinyButton } from "@/components/ui/shiny-button";
import { useTranslation } from 'react-i18next';

const Navbar = ({theme, setTheme}) => {
  const { t } =useTranslation();
  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-icon"/>
          <h3
            className="title-logo"
            dangerouslySetInnerHTML={{ __html: t("logo") }}
          ></h3>
        </div>
      <div className="nav-1">

        <div className="links-page">
          <ul>
            <li>{t("HomePage")}</li>
            <li>{t("AboutUS")}</li>
            <li>{t("OurProjects")}</li>
            <li>{t("OurServices")}</li>
            <li>{t("ContactUS")}</li>
          </ul>
        </div>
      </div>

      <div className="nav-2">
        <div className='lang'>
            <LanguagesMenu />
        </div>
        <div className='theme'>
          <button>
            <img onClick={() => {toggle_mode()}} src={theme == 'light' ? darkModeLogo : lightModeLogo} alt="darkMode" />
          </button>
        </div>
        <div className='sign-in'>
          <ShinyButton>{t("signIn")}</ShinyButton>
        </div>
      </div>
    </div>
  )
}

export default Navbar