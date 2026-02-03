import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type Props = {
    name: string;
    email: string;
    onChange: (field: string, value: string) => void;
};

export default function FormInput({ name, email, onChange }: Props) {
    return (
        <Box
            autoComplete="off"
            className="input-email-name flex flex-col md:flex-row gap-3"
        >
            <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => onChange("name", e.target.value)}
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
                value={email}
                onChange={(e) => onChange("email", e.target.value)}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '30px',
                    },
                }}
            />
        </Box>
    );
}
