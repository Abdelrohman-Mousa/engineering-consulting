import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import logo from '../../../assets/icons/logo.svg';
import './sidebar.scss';
import { useTranslation } from 'react-i18next';
import LanguagesMenu from '../../materialUI/LanguagesMenu';
import { ShinyButton } from "@/components/ui/shiny-button";

export default function TemporaryDrawer({ open, setOpen, theme, toggleMode }) {
  const { t } =useTranslation();

  const toggleDrawer = (newOpen) => () => setOpen(newOpen);

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        '& .MuiListItemButton-root': { borderRadius: '10px', mb: '5px' },
      }}
      className="sidebar-menu"
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {/* اللغة + الوضع */}
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={(e) => e.stopPropagation()}>
            <ListItemIcon className='lang-sidebar'>
              {/* <LanguageIcon /> */}
              {t("Selectdisplaylanguage")}
            </ListItemIcon>
            <ListItemText primary={<LanguagesMenu />} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={toggleMode}>
            <ListItemIcon>
              <DarkModeIcon className='icon-mode'/>
            </ListItemIcon>
            <ListItemText
              primary={theme === 'light' ? t('DarkMode') : t('LightMode')}
            />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      {/* روابط الصفحات */}
      <List>
        {[t('Home'), t('About'), t('Projects'), t('Services'), t('Contact')].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={logo} className='logo-sidebar' alt="logoSidebar" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>

      <Divider />

      {/* زر تسجيل الدخول */}
      <div className="sidebar-signin">
        <ShinyButton>{t("signIn")}</ShinyButton>
      </div>
    </Box>
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#1A172D',
          color: '#fff',
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
}
