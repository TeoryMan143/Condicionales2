interface Props {
    greater?: boolean | string;
    reverse?: boolean;
    type: string;
    isVowel?: boolean;
}

function Indicator({ greater, reverse, type, isVowel }: Props) {
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
    }
    return <div>undefined</div>;
}

export default Indicator;
