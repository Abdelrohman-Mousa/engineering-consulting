import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import {useAuth} from "../context/AuthContext";
import {Link, useNavigate} from "react-router";
import { logout } from "../auth/authService";
import {ShinyButton} from "~/components/ui/shiny-button";

export default function ButtonAccountManu() {
    const {user, role} = useAuth();

    const navigate = useNavigate();

    // logOut
    const handleLogout = async () => {
        try {
            await logout();
            navigate("/signin"); // أو "/"
        } catch (err) {
            alert(err.message);
        }
    };


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 35, height: 35 }}>
                            {user.photoURL ? (
                                <img src={user.photoURL} alt="user" />
                            ) : (
                                <span>{user.email[0].toUpperCase()}</span>
                            )}
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
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
                <MenuItem onClick={handleClose} disabled>
                    <Avatar sx={{ width: 32, height: 32 }}>
                        {user.photoURL ? (
                            <img src={user.photoURL} alt="user" />
                        ) : (
                            <span>{user.email[0].toUpperCase()}</span>
                        )}
                    </Avatar>
                    Profile
                </MenuItem>

                <MenuItem>
                    {user && role === "admin" && (
                        <div className="dashboard-icon">
                            <Link to="/dashboard" style={{display: "flex", alignItems: "center"}}>
                                <ShinyButton>
                                    <img src="/assets/icons/dashboard.svg" alt="dashboard" style={{width: 32, height: 32}} />
                                </ShinyButton>
                                <p>Admin Dashboard</p>
                            </Link>
                        </div>
                    )}
                </MenuItem>

                <Divider />

                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
