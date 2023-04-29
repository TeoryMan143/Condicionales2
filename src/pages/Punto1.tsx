import CtmTextField from '../components/CtmTextField';
import { useState, useEffect } from 'react';
import Indicator from '../components/Indicator';

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
        <div className='border-amber-500 border-4 p-8 rounded-lg'>
            <h1 className='text-center mb-5 font-robotos text-3xl text-battleship-gray-600'>
                Comparacion de numeros
            </h1>
            <div className='flex flex-col'>
                <div className='flex items-center gap-4 justify-center'>
                    <div className='flex flex-col items-center'>
                        <CtmTextField
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
                            onChange={e =>
                                setNumRight(parseInt(e.target.value))
                            }
                        />
                    </div>
                </div>
                <div className='flex justify-center gap-56'>
                    <Indicator greater={greater} />
                    <Indicator greater={greater} reverse />
                </div>
            </div>
        </div>
    );
}
export default Punto1;
