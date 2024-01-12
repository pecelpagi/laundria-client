import { styled } from '../stitches.config';

const StyledComponent = styled('button', {
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
            },
            white: {
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: '1px solid #ccc',
            }
        },
        outlined: {
            true: {
                backgroundColor: 'transparent',
                border: '2px solid',
                color: 'inherit',
            }
        }
    },

    defaultVariants: {
        variant: 'default'
    }
});

const StyledButton = (props) => {
    let classes = `py-2 px-4 rounded disabled:opacity-75 disabled:cursor-not-allowed`;

    if (props.className) classes = `${classes} ${props.className}`;

    return (<StyledComponent {...props} className={classes}>{props.children}</StyledComponent>);
};

export default StyledButton;