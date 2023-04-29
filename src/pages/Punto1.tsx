import Title from '../components/Title';
import CtmTextField from '../components/CtmTextField';
import { useState, useEffect } from 'react';
import Indicator from '../components/Indicator';
import PointBox from '../components/PointBox';

function Punto1() {
    const [numLeft, setNumLeft] = useState(0);
    const [numRight, setNumRight] = useState(0);
    const [greater, setGreater] = useState<boolean | string>('same');

    useEffect(() => {
        if (numLeft === numRight) {
            setGreater('same');
        } else {
            setGreater(numLeft > numRight);
        }
    }, [numLeft, numRight]);

    return (
        <PointBox>
            <Title>Comparación de numeros</Title>
            <div className='flex flex-col'>
                <div className='flex items-center gap-4 justify-center'>
                    <div className='flex flex-col items-center'>
                        <CtmTextField
                            type='number'
                            onChange={e => setNumLeft(parseInt(e.target.value))}
                        />
                    </div>
                    <p
                        className={`font-bold text-2xl text-battleship-gray-500 transition-transform ${
                            !greater && '-rotate-180'
                        }`}
                    >
                        {greater === 'same' ? '=' : '>'}
                    </p>
                    <div className='flex flex-col items-center'>
                        <CtmTextField
                            type='number'
                            onChange={e =>
                                setNumRight(parseInt(e.target.value))
                            }
                        />
                    </div>
                </div>
                <div className='flex justify-center gap-56'>
                    <Indicator type='numCompare' greater={greater} />
                    <Indicator type='numCompare' greater={greater} reverse />
                </div>
            </div>
        </PointBox>
    );
}
export default Punto1;
