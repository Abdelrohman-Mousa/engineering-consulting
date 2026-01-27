import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Menu } from "@mui/material";
import type { MenuProps } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import type { MessageFilter } from "/src/types/message"

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: 'rgb(55, 65, 81)',
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
                ...theme.applyStyles('dark', {
                    color: 'inherit',
                }),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
        ...theme.applyStyles('dark', {
            color: theme.palette.grey[300],
        }),
    },
}));

interface ButtonMessageMenuProps {
    onFilterChange: (filter: MessageFilter) => void;
}


export default function ButtonMessageMenu({ onFilterChange }: ButtonMessageMenuProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="button-message-filter">
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Filter Messages
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >

            <MenuItem
                    onClick={() => {
                        onFilterChange("All");
                        handleClose();
                    }}
                    disableRipple
                >
                    All
                    <div className="absolute right-0 rounded-full w-3 h-3 mx-2" style={{backgroundColor: "#4CAF50"}}/>
                    <div className="absolute right-2 rounded-full w-3 h-3 mx-2" style={{backgroundColor: "#2196F3"}}/>
                    <div className="absolute right-4 rounded-full w-3 h-3 mx-2" style={{backgroundColor: "#9E9E9E"}}/>
                </MenuItem>

                <Divider sx={{ my: 0.5 }} />
                <MenuItem
                    onClick={() => {
                        onFilterChange("New");
                        handleClose();
                    }}
                    disableRipple
                >
                    New
                    <div className="absolute right-0 rounded-full w-3 h-3 mx-2" style={{backgroundColor: "#4CAF50"}} />
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />

                <MenuItem
                    onClick={() => {
                        onFilterChange("Read");
                        handleClose();
                    }}
                    disableRipple
                >
                    Read
                    <div className="absolute right-0 rounded-full w-3 h-3 mx-2" style={{backgroundColor: "#2196F3"}} />
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem
                    onClick={() => {
                        onFilterChange("Closed");
                        handleClose();
                    }}
                    disableRipple
                >
                    Closed
                    <div className="absolute right-0 rounded-full w-3 h-3 mx-2" style={{backgroundColor: "#9E9E9E"}} />
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
