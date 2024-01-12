import { Link } from 'react-router-dom';
import * as MenuListComponent from './menu-list.components';

const MenuList = ({ onClick }) => {
    return (
        <ul className="list-none bg-white text-sm shadow-lg rounded w-32 border border-gray-200 text-left">
            <MenuListComponent.RowList>
                <Link to="/my-profile" className="text-sm" onClick={onClick}>Profil Saya</Link>
            </MenuListComponent.RowList>
            <MenuListComponent.RowList>
                <Link to="/my-profile" className="text-sm" onClick={onClick}>Ubah Password</Link>
            </MenuListComponent.RowList>
            <MenuListComponent.RowList>
                <Link to="/signout" className="text-sm">Keluar</Link>
            </MenuListComponent.RowList>
        </ul>
    );
}

export default MenuList;