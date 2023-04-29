interface Props {
    children: JSX.Element[] | JSX.Element;
}

function PointBox({ children }: Props) {
    return (
        <div className='border-amber-500 border-4 p-8 rounded-lg'>
            {children}
        </div>
    );
}
export default PointBox;
