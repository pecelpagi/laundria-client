import styled from '../../stitches.config';

export const ErrorImageOverlay = styled('div', {
    height: '60vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const ErrorImageContainer = styled('div', {
    display: 'inline-block',
    backgroundImage: 'url(https://i.imgur.com/yW2W9SC.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '40vh',
    height: '40vh',
});

export const ErrorImageText = styled('h2', {
    fontSize: '28px',
    color: '#2f8e89',
});
