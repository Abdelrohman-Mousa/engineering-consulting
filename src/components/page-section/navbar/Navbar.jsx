import logo from '../../../assets/icons/logo.svg';
import darkModeLogo from '../../../assets/icons/dark-mode.svg';
import lightModeLogo from '../../../assets/icons/light-mode.svg';
import './navbar.scss';
import LanguagesMenu from '../../materialUI/LanguagesMenu';
import { ShinyButton } from "@/components/ui/shiny-button";
import { useTranslation } from 'react-i18next';
import TemporaryDrawer from '../sidebar/Sidebar';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { IconButton } from '@mui/material';

const Navbar = ({theme, setTheme}) => {
  const { t } =useTranslation();
  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
const [open, setOpen] = useState(false);

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

      {/* Sidebar */}
       <div className="menu-icon">
         <IconButton onClick={() => setOpen(true)}>
           <MenuIcon />
         </IconButton>
       </div>
       <TemporaryDrawer open={open} setOpen={setOpen} />

    </div>
  )
}

export default Navbar