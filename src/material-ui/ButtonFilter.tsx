import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import type { MenuProps } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Home from '@mui/icons-material/Home';
import Business from '@mui/icons-material/Business';
import Style from '@mui/icons-material/Style';
import Construction from '@mui/icons-material/Construction';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

export default function ButtonFilter({ onSelect }: { onSelect: (value: string) => void }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (category?: string) => {
        setAnchorEl(null);
        if (category) onSelect(category);
    };

    return (
        <div>
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
                categories
            </Button>

            <StyledMenu
                id="demo-customized-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
            >
                <MenuItem onClick={() => handleClose("All")} disableRipple>
                    <DashboardCustomizeIcon />
                    All Projects
                </MenuItem>

                <MenuItem onClick={() => handleClose("Residential")} disableRipple>
                    <Home />
                    Residential
                </MenuItem>

                <MenuItem onClick={() => handleClose("Commercial")} disableRipple>
                    <Business />
                    Commercial
                </MenuItem>

                <MenuItem onClick={() => handleClose("Interior Design")} disableRipple>
                    <Style />
                    Interior Design
                </MenuItem>

                <MenuItem onClick={() => handleClose("Renovation")} disableRipple>
                    <Construction />
                    Renovation
                </MenuItem>

                <MenuItem onClick={() => handleClose("3D Visualization")} disableRipple>
                    <ThreeDRotation />
                    3D Visualization
                </MenuItem>
            </StyledMenu>
        </div>
    );
}

