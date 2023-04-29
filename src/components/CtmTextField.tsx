import { TextField } from '@mui/material';

interface Props {
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    type: string;
    maxLength?: string;
    pattern?: string;
}

function CtmTextField({ onChange, type, maxLength, pattern }: Props) {
    return (
        <TextField
            color='warning'
            type={type}
            inputProps={{
                maxLength,
                pattern,
                max: maxLength,
            }}
            onChange={onChange}
        />
    );
}

export default CtmTextField;
