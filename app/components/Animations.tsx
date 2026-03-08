import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Animations() {
    return (
        <Box sx={{ width: 900, height: 900, textAlign: "center", alignItems: "center", display: "flex", justifyContent: "center" }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
        </Box>
    );
}