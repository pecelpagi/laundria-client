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

export default () => {
    return (
        <ul className="list-none bg-white text-sm shadow-xl rounded w-32">
            <RowList><a href="#" className="text-sm">Profil Saya</a></RowList>
            <RowList><Link to="/signout" className="text-sm">Logout</Link></RowList>
        </ul>
    );
}