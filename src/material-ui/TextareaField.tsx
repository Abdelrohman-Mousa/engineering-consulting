import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useTranslation} from "react-i18next";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function TextareaField({ value, onChange }: Props) {
    const { t } = useTranslation();

    return (
        <Box
            sx={{ '& .MuiTextField-root': { width: '100%' } }}
            autoComplete="off"
        >
            <TextField
                label={t("descriptionLabel")}
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
