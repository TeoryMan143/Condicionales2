interface Props {
    greater?: boolean | string;
    reverse?: boolean;
    type: 'numCompare' | 'vowel' | 'week' | 'evenNum' | 'operation';
    isVowel?: boolean;
    dayNum?: number;
    number?: number;
}

function Indicator({ greater, reverse, type, isVowel, dayNum, number }: Props) {
    if (type === 'numCompare') {
        if (reverse && greater != 'same') {
            greater = !greater;
        }

        const setText = (op: boolean | string | undefined) => {
            if (op === 'same') {
                return 'Iguales';
            }
            return op ? 'Numero mayor' : 'Numero menor';
        };

        return (
            <p className={`${greater ? 'text-green-500' : 'text-red-600'} `}>
                {setText(greater)}
            </p>
        );
    } else if (type === 'vowel') {
        return (
            <p className='text-center'>
                {isVowel ? 'Es una vocal' : 'Es una consonante'}
            </p>
        );
    } else if (type === 'week') {
        const setDay = (num: number | undefined) => {
            if (num === 1) {
                return 'lunes';
            } else if (num === 2) {
                return 'martes';
            } else if (num === 3) {
                return 'miercoles';
            } else if (num === 4) {
                return 'jueves';
            } else if (num === 5) {
                return 'viernes';
            } else if (num === 6) {
                return 'sabado';
            } else if (num === 7) {
                return 'domingo';
            }
        };
        return <p className='text-center'>Dia {setDay(dayNum)}</p>;
    } else if (type === 'evenNum') {
        const even = (num: number | undefined) => {
            if (num === undefined) {
                return 'Escribe un numero';
            } else if (num % 2 === 0) {
                return 'Numero par';
            }
            return 'Numero impar';
        };
        return <p className='text-center'>{even(number)}</p>;
    }
    return <div>undefined</div>;
}

export default Indicator;
