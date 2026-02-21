import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useTranslation} from "react-i18next";

type Props = {
    name: string;
    email: string;
    onChange: (field: string, value: string) => void;
};

export default function FormInput({ name, email, onChange }: Props) {
    const { t } = useTranslation();

    return (
        <Box
            autoComplete="off"
            className="input-email-name flex flex-col md:flex-row gap-3"
        >
            <TextField
                fullWidth
                label={t("from-name")}
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
                label={t("email")}
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
