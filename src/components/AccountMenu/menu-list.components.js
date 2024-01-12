import { styled } from '../../stitches.config';

export const RowList = styled('li', {
    '& a': {
        display: 'block',
        padding: '10px',
        fontWeight: '500',
    },
    '& a:hover': {
        background: '#f1f1f1',
    },
    '&:last-child': {
        'a': {
            borderTop: '1px solid #e2e2e2',
        }
    }
});