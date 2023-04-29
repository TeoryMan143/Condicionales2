import { TextField } from '@mui/material';

interface Props {
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

function CtmTextField({ onChange }: Props) {
    return (
        <TextField
            color='warning'
            type='number'
            inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9]*',
            }}
            onChange={onChange}
        />
    );
}

export default CtmTextField;
