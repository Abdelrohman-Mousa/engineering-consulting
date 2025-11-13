import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import type { MenuProps } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import en from '/assets/icons/flag-us.svg';
import ar from '/assets/icons/flag-ar.svg';
import fr from '/assets/icons/flag-fr.svg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0,0,0,0.05) 0px 0px 0px 1px, rgba(0,0,0,0.1) 0px 10px 15px -3px',
        '& .MuiMenu-list': { padding: '4px 0' },
        '& .MuiMenuItem-root': {
            '&:active': {
                backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            },
        },
    },
}));

export default function ButtonLanguages() {
    const { t } = useTranslation();

    const [isClient, setIsClient] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [currentLang, setCurrentLang] = React.useState('en');

    React.useEffect(() => {
        setIsClient(true);
        const savedLang = localStorage.getItem('i18nextLng') || 'en';
        setCurrentLang(savedLang);
        i18n.changeLanguage(savedLang);

        // تحديث اتجاه الصفحة
        document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setCurrentLang(lng);
        localStorage.setItem('i18nextLng', lng);
        handleClose();

        // تغيير اتجاه الصفحة عند العربية
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    const languages = [
        { code: 'en', label: t('English'), flag: en },
        { code: 'ar', label: t('Arabic'), flag: ar },
        { code: 'fr', label: t('Franch'), flag: fr },
    ];

    if (!isClient) return null;

    return (
        <div>
            <Button
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                className="button-lang"
            >
                {currentLang.toUpperCase()}
            </Button>

            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        backgroundColor: document.body.classList.contains('dark')
                            ? 'var(--background-button-dark)'
                            : 'var(--background-button-light)',
                        color: document.body.classList.contains('dark')
                            ? 'var(--text-color-light)'
                            : 'var(--text-color-dark)',
                    },
                }}
            >
                {languages.map((lang) => (
                    <MenuItem key={lang.code} onClick={() => changeLanguage(lang.code)} disableRipple>
                        <img src={lang.flag} alt={lang.label} style={{ width: 20, marginRight: 8, marginLeft: 8 }} />
                        {lang.label}
                    </MenuItem>
                ))}
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple disabled>
                    <MoreHorizIcon /> {t('Selectdisplaylanguage')}
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
