import { styled } from '../../stitches.config';

export const StyledButton = styled('button', {
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:not(.selected-date):hover': {
        background: '#f5f4f7',
    },
    '&.selected, &.selected:hover': {
        background: '#24292f',
        color: '#FFF',
    },
});