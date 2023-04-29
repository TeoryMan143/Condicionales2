import CtmTextField from '../components/CtmTextField';
import Indicator from '../components/Indicator';
import PointBox from '../components/PointBox';
import Title from '../components/Title';
import { useState } from 'react';

function Punto1() {
    const [number, setNumber] = useState(0);

    return (
        <PointBox>
            <Title>Par o impar</Title>
            <div>
                <CtmTextField
                    type='number'
                    onChange={e => setNumber(parseInt(e.target.value))}
                    maxLength='7'
                    pattern='[^0-9]+$'
                />
            </div>
            <Indicator type='evenNum' number={number} />
        </PointBox>
    );
}
export default Punto1;
