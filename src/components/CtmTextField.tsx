import { TextField } from '@mui/material';

interface Props {
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    type: string;
    maxLength?: string;
}

function CtmTextField({ onChange, type, maxLength }: Props) {
    return (
        <TextField
            color='warning'
            type={type}
            inputProps={{
                maxLength,
            }}
            onChange={onChange}
        />
    );
}

export default CtmTextField;
