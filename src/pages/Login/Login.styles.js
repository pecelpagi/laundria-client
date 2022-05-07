import { styled } from '../../stitches.config';
import { fonts } from '../../core';

export const Wrapper = styled('form', {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
});

export const Header = styled('div', {
    backgroundColor: '$backgroundPrimary',
    color: '$colorPrimary',
    fontFamily: fonts.brand,
});
