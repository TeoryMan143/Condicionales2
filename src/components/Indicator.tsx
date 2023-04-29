interface Props {
    greater: boolean | string;
    reverse?: boolean;
}

function Indicator({ greater, reverse }: Props) {
    if (reverse && greater != 'same') {
        greater = !greater;
    }

    const setText = (op: boolean | string) => {
        if (op === 'same') {
            return 'Iguales';
        }
        return op ? 'Numero mayor' : 'Numero menor';
    };

    return (
        <span className={`${greater ? 'text-green-500' : 'text-red-600'} `}>
            {setText(greater)}
        </span>
    );
}

export default Indicator;
