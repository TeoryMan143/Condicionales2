interface Props {
    children: string;
}

function Title({ children }: Props) {
    return (
        <h1 className='text-center mb-10 font-robotos text-3xl text-battleship-gray-600'>
            {children}
        </h1>
    );
}

export default Title;
