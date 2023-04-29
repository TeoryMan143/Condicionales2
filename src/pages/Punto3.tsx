import CtmTextField from '../components/CtmTextField';
import Indicator from '../components/Indicator';
import PointBox from '../components/PointBox';
import Title from '../components/Title';
import { useState } from 'react';

function Punto1() {
    const [dayNum, setDayNum] = useState(0);

    return (
        <PointBox>
            <Title>Dia de la semana</Title>
            <div>
                <CtmTextField
                    type='number'
                    onChange={e => setDayNum(parseInt(e.target.value))}
                    maxLength='7'
                    pattern='[^0-9]+$'
                />
            </div>
            <Indicator type='week' dayNum={dayNum} />
        </PointBox>
    );
}
export default Punto1;
