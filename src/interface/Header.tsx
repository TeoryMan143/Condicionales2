import NavPoint from '../components/NavPoint';

function Header() {
    return (
        <header className=''>
            <nav className='flex justify-center bg-battleship-gray-500 border-b-orange-400 border-b-8'>
                <ul className='flex'>
                    <NavPoint to='/punto1'>Punto 1</NavPoint>
                    <NavPoint to='/punto2'>Punto 2</NavPoint>
                    <NavPoint to='/punto3'>Punto 3</NavPoint>
                    <NavPoint to='/punto4'>Punto 4</NavPoint>
                    <NavPoint to='/punto5'>Punto 5</NavPoint>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
