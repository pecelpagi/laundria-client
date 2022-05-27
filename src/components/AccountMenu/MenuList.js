import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';

const RowList = styled('li', {
    '& a': {
        display: 'block',
        padding: '10px',
        fontWeight: '500',
    },
    '& a:hover': {
        background: '#f1f1f1',
    }
});

export default ({ onClick }) => {
    return (
        <ul className="list-none bg-white text-sm shadow-xl rounded w-32">
            <RowList><Link to="/my-profile" className="text-sm" onClick={onClick}>Profil Saya</Link></RowList>
            <RowList><Link to="/signout" className="text-sm">Logout</Link></RowList>
        </ul>
    );
}