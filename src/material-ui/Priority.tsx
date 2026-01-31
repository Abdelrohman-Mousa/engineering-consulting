import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material';

export default function Priority() {
    const [consultingType, setConsultingType] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setConsultingType(event.target.value as string);
    };

    return (
        <Box className="priority-level">
            <FormControl fullWidth>
                <InputLabel id="consulting-type-label">
                    Priority Type
                </InputLabel>

                <Select
                    className="select-priority-level"
                    style={{borderRadius: "30px"}}
                    labelId="consulting-type-label"
                    value={consultingType}
                    label="Priority Level"
                    onChange={handleChange}
                >
                    <MenuItem value="low">Low</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="hight">Hight</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
