import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import flagEn from '../../../src/assets/icons/flag-us.svg';
import flagAr from '../../../src/assets/icons/flag-ar.svg';
import flagFr from '../../../src/assets/icons/flag-fr.svg';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next'; 

export default function LanguagesMenu() {
  const { t } =useTranslation(); // خاص بالترجمةٍ

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const { i18n } = useTranslation(); // ✅ هنستخدم i18n.changeLanguage
  
  // ✅ استرجاع اللغة المحفوظة عند تحميل الصفحة
  React.useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    i18n.changeLanguage(savedLang);
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
  }, [i18n]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);

  // حفظ اللغة في localStorage
  localStorage.setItem('lang', lang);

  // تغيير اتجاه الصفحة حسب اللغة
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  // إغلاق القائمة
  handleClose();

};


  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Select display language">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 40, height: 40 }}><Globe className='icon-1'/></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{
         className: 'lang-menu', // 👈 أضفنا الكلاس هنا
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => changeLanguage('ar')}>
          <img src={flagAr} alt="falfAr" className='en-img'/> {t("Araic")}
        </MenuItem>
        
        <MenuItem onClick={() => changeLanguage('en')}>
           <img src={flagEn} alt="flagEn" className='en-img'/> {t("English")}
        </MenuItem>
        
        <MenuItem onClick={() => changeLanguage('fr')}>
           <img src={flagFr} alt="flagEn" className='en-img'/> {t("Franch")}
        </MenuItem>
        <Divider />
        
        <MenuItem onClick={handleClose} disabled>
         {t("Selectdisplaylanguage")}
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
