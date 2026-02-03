import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material';

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function Priority({ value, onChange }: Props) {

    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value as string);
    };

    return (
        <Box className="priority-level">
            <FormControl fullWidth>
                <InputLabel id="priority-label">
                    Priority Level
                </InputLabel>

                <Select
                    className="select-priority-level"
                    style={{ borderRadius: "30px" }}
                    labelId="priority-label"
                    value={value}
                    label="Priority Level"
                    onChange={handleChange}
                >
                    <MenuItem value="low">Low</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="high">High</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
