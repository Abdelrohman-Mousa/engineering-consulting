import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material';
import {useTranslation} from "react-i18next";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function ConsultingType({ value, onChange }: Props) {
    const { t } = useTranslation();

    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value as string);
    };

    return (
        <Box className="consulting-type">
            <FormControl fullWidth>
                <InputLabel id="consulting-type-label">
                    {t("ConsultingType")}
                </InputLabel>

                <Select
                    className="select-consulting-type"
                    style={{ borderRadius: "30px" }}
                    labelId="consulting-type-label"
                    value={value}
                    label="Consulting Type"
                    onChange={handleChange}
                >
                    <MenuItem value="technical">{t("TechnicalConsulting")}</MenuItem>
                    <MenuItem value="business">{t("BusinessConsulting")}</MenuItem>
                    <MenuItem value="marketing">{t("MarketingConsulting")}</MenuItem>
                    <MenuItem value="enterprise">{t("EnterpriseConsulting")}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
