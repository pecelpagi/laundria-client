import { styled } from '../../stitches.config';

export const ErrorImageOverlay = styled('div', {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    position: 'fixed',
    background: '#FFF',
    top: 0,
    left: 0,
    textAlign: 'center',
    '& span': {
        overflowWrap: 'normal',
        wordBreak: 'break-word',
    }
})
