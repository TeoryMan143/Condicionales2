import { useState, useEffect } from 'react';
import CtmTextField from '../components/CtmTextField';
import PointBox from '../components/PointBox';
import Title from '../components/Title';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function Punto1() {
    const [numLeft, setNumLeft] = useState(0);
    const [numRight, setNumRight] = useState(0);
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState(0);

    useEffect(() => {
        if (operation === 'add') {
            setResult(numLeft + numRight);
        } else if (operation === 'sub') {
            setResult(numLeft - numRight);
        } else if (operation === 'multi') {
            setResult(numLeft * numRight);
        } else if (operation === 'divi') {
            setResult(numLeft / numRight);
        }
    }, [numLeft, numRight, operation]);

    return (
        <PointBox>
            <Title>Operaciones</Title>
            <div className='flex gap-7 flex-col'>
                <div className='flex gap-4 items-center'>
                    <CtmTextField
                        type='number'
                        onChange={e => setNumLeft(parseInt(e.target?.value))}
                    />
                    <p className='font-bold text-2xl text-battleship-gray-500'>
                        {operation === 'add' && '+'}
                        {operation === 'subs' && '-'}
                        {operation === 'multi' && '*'}
                        {operation === 'divi' && '/'}
                    </p>
                    <CtmTextField
                        type='number'
                        onChange={e => setNumRight(parseInt(e.target.value))}
                    />
                </div>
                <FormControl>
                    <InputLabel id='labelId' color='warning'>
                        Operacion
                    </InputLabel>
                    <Select
                        labelId='labelId'
                        label='Operacion'
                        id='ops'
                        value={operation}
                        fullWidth
                        onChange={e => setOperation(e.target.value)}
                        color='warning'
                    >
                        <MenuItem value='add'>Suma</MenuItem>
                        <MenuItem value='subs'>Resta</MenuItem>
                        <MenuItem value='multi'>Multiplicación</MenuItem>
                        <MenuItem value='divi'>División</MenuItem>
                    </Select>
                </FormControl>
                <p className='text-2xl text-battleship-gray-500 text-center'>
                    Resultado:{' ' + result}
                </p>
            </div>
        </PointBox>
    );
}
export default Punto1;
