import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormInput() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {
                    // minWidth: 425,
                },
            }}
            autoComplete="off"
            className="input-email-name flex flex-col md:flex-row gap-3"
        >
            <TextField
                className="input-name"
                fullWidth
                label="Name"
                variant="outlined"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '30px',
                    },
                }}
            />

            <TextField
                fullWidth
                label="Email"
                variant="outlined"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '30px',
                    },
                }}
            />
        </Box>
    );
}
