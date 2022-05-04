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
            }
        }
    },

    defaultVariants: {
        variant: 'default'
    }
});

export default (props) => {
    let classes = "p-2 rounded";

    if (props.className) classes = `${classes} ${props.className}`;

    return (<StyledButton {...props} className={classes}  />);
};