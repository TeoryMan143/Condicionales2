import { NavLink } from 'react-router-dom';

interface Props {
    children: string;
    to: string;
}

function NavPoint({ children, to }: Props) {
    return (
        <li className='p-4 bg-amber-400 m-3 rounded-sm text-lg transition-colors font-semibold hover:bg-orange-400 hover:text-amber-100'>
            <NavLink to={to}>{children}</NavLink>
        </li>
    );
}

export default NavPoint;
