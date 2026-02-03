import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function TextareaField({ value, onChange }: Props) {
    return (
        <Box
            sx={{ '& .MuiTextField-root': { width: '100%' } }}
            autoComplete="off"
        >
            <TextField
                label="Description"
                multiline
                maxRows={4}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '30px',
                        height: "120px"
                    },
                }}
            />
        </Box>
    );
}
