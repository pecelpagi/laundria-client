import { fonts } from '../core';
import { styled } from '../stitches.config';

const StyledButton = styled('button', {
    fontFamily: fonts.brand,
    '&:hover': {
        cursor: 'pointer'
    },

    variants: {
        variant: {
            default: {
                backgroundColor: '$backgroundTertiary',
            },
            primary: {
                backgroundColor: '$backgroundPrimary',
                color: '$colorPrimary',
            },
            danger: {
                backgroundColor: 'rgb(220 38 38)',
                color: '#FFFFFF'
            }
        }
    },

    defaultVariants: {
        variant: 'default'
    }
});

export default (props) => {
    let classes = `py-2 px-4 rounded disabled:opacity-75 ${props.disabled ? 'cursor-not-allowed' : ''}`;

    if (props.className) classes = `${classes} ${props.className}`;

    return (<StyledButton {...props} className={classes}>{props.children}</StyledButton>);
};