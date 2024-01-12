import { Link } from 'react-router-dom';
import { styled } from '../stitches.config';

const StyledUl = styled('ul', {
    alignItems: 'center',
    display: 'flex',
    height: '34px',
    '& li': {
        display: 'inline-block',
        fontSize: '0.75rem',
    },
    '& li:not(:last-child)': {
        '&:after': {
            content: '›',
            margin: '0 8px',
        }
    },
    '& li:last-child': {
        opacity: '0.5'
    }
});

const Breadcrumb = ({ data }) => (
    <StyledUl className="list-none">
        {data.map((x) => {
            if (typeof x === 'string') return (<li key={x}>{x}</li>);

            return (<li key={x.label}><Link to={x.link}>{x.label}</Link></li>);
        })}
    </StyledUl>
)

export default Breadcrumb;