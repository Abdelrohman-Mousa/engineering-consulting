import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextareaField() {
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { width: '100%' } }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    maxRows={4}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '30px',
                            height: "120px"
                        },
                    }}
                />
            </div>
        </Box>
    );
}
