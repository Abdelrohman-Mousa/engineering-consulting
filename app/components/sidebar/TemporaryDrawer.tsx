import * as React from 'react';
import Box from '@mui/material/Box';
import './sidebar.scss';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'react-i18next';
import { ShinyButton } from '~/components/ui/shiny-button';
import { Link } from 'react-router'; // ✅ مهم جدًا

export default function TemporaryDrawer() {
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const [dir, setDir] = React.useState<'left' | 'right'>('left');

    React.useEffect(() => {
        // لو اللغة عربي يفتح من اليمين
        setDir(document.documentElement.dir === 'rtl' ? 'right' : 'left');
    }, []);

    const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

    const links = [
        { label: t('Home'), path: '/' },
        { label: t('About'), path: '/about' },
        { label: t('Projects'), path: '/projects' },
        { label: t('Services'), path: '/services' },
        { label: t('Contact'), path: '/contact' },
    ];

    const DrawerList = (
        <Box
            className="sidebar-box"
            sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center' }} className="close-sidebar">
                {/* ✅ هنا خليه div مش button علشان مايحصلش خطأ الـ button داخل button */}
                <div onClick={toggleDrawer(false)} style={{width: "100%"}} >
                    <Link to="/signin" style={{ textDecoration: 'none' }}>
                        <ShinyButton className="signIn-sidebar">{t('signIn')}</ShinyButton>
                    </Link>
                </div>
            </Box>

            <Divider />

            <List>
                {links.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton component={Link} to={item.path} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div className="sidebar-menu">
            <IconButton onClick={toggleDrawer(true)} className="icon-button">
                <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <Drawer anchor={dir} open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
