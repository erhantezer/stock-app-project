import { Box } from '@mui/material';
import { MultiSelectBox, MultiSelectBoxItem } from '@tremor/react';
import { flexCenter } from '../styles/globalStyle';

const MultiSelect = () => {


    
    return (
        <Box sx={flexCenter} mt={3}>
            <MultiSelectBox
                defaultValue={undefined}
                value={undefined}
                onValueChange={undefined}
                placeholder="Select..."
                icon={undefined}
                maxWidth="max-w-none"
                marginTop="mt-0"
            >
                <MultiSelectBoxItem
                    text=""
                    value={undefined}
                />
            </MultiSelectBox>
        </Box>
    )
}

export default MultiSelect