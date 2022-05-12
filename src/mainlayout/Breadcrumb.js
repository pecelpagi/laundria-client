import { styled } from '../stitches.config';
import { isHasProperty } from '../utils';

const StyledUl = styled('ul', {
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

export default ({ data }) => (
    <StyledUl className="list-none">
        {data.map((x) => {
            if (typeof x === 'string') return (<li key={x}>{x}</li>);

            return (<li key={x.label}><a href={x.link}>{x.label}</a></li>);
        })}
    </StyledUl>
)