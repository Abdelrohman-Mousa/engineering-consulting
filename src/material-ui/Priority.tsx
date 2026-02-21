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

export default function Priority({ value, onChange }: Props) {
    const { t } = useTranslation();

    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value as string);
    };

    return (
        <Box className="priority-level">
            <FormControl fullWidth>
                <InputLabel id="priority-label">
                    {t("PriorityLevel")}
                </InputLabel>

                <Select
                    className="select-priority-level"
                    style={{ borderRadius: "30px" }}
                    labelId="priority-label"
                    value={value}
                    label="Priority Level"
                    onChange={handleChange}
                >
                    <MenuItem value="low">{t("PriorityLow")}</MenuItem>
                    <MenuItem value="medium">{t("PriorityMedium")}</MenuItem>
                    <MenuItem value="high">{t("PriorityHigh")}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
