// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import './sidebar.scss';


// export default function TemporaryDrawer({ open, setOpen }) {
//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };

//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation" className='sidebar-menu' onClick={toggleDrawer(false)}>
//       <List>
//         {['HomePage', 'About US', 'Our Projects', 'Our Services', 'Contact US'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
//       {DrawerList}
//     </Drawer>
//   );
// }


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
import LanguageIcon from '@mui/icons-material/Language';
import './sidebar.scss';
import LanguagesMenu from '../../materialUI/LanguagesMenu';
import { ShinyButton } from "@/components/ui/shiny-button";

export default function TemporaryDrawer({ open, setOpen, theme, toggleMode }) {
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
            <ListItemIcon>
              {/* <LanguageIcon /> */}
              Select Language
            </ListItemIcon>
            <ListItemText primary={<LanguagesMenu />} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={toggleMode}>
            <ListItemIcon>
              <DarkModeIcon />
            </ListItemIcon>
            <ListItemText
              primary={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      {/* روابط الصفحات */}
      <List>
        {['Home', 'About', 'Projects', 'Services', 'Contact'].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
        <ShinyButton>Sign In</ShinyButton>
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
