import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material';

export default function ConsultingType() {
    const [consultingType, setConsultingType] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setConsultingType(event.target.value as string);
    };

    return (
        <Box className="consulting-type">
            <FormControl fullWidth>
                <InputLabel id="consulting-type-label">
                    Consulting Type
                </InputLabel>

                <Select
                    className="select-consulting-type"
                    style={{borderRadius: "30px"}}
                    labelId="consulting-type-label"
                    value={consultingType}
                    label="Consulting Type"
                    onChange={handleChange}
                >
                    <MenuItem value="technical">Technical Consulting</MenuItem>
                    <MenuItem value="business">Business Consulting</MenuItem>
                    <MenuItem value="marketing">Marketing Consulting</MenuItem>
                    <MenuItem value="enterprise">Enterprise Consulting</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
