import PointBox from '../components/PointBox';
import Title from '../components/Title';
import CtmTextField from '../components/CtmTextField';
import { useState, useEffect } from 'react';
import Indicator from '../components/Indicator';

const vowels = ['a', 'e', 'i', 'o', 'u'];

function Punto1() {
    const [letter, setLetter] = useState('');
    const [isVowel, setIsVowel] = useState(false);

    useEffect(() => {
        setIsVowel(vowels.includes(letter));
    }, [letter]);

    return (
        <PointBox>
            <Title>Titpo de letra</Title>
            <div>
                <CtmTextField
                    type='text'
                    onChange={e => setLetter(e.target.value)}
                    maxLength='1'
                />
            </div>
            <Indicator type='vowel' isVowel={isVowel} />
        </PointBox>
    );
}
export default Punto1;
