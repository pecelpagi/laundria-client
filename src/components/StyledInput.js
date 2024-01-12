import React from 'react';
import { styled } from '../stitches.config';
import { isHasProperty } from '../utils';

const StyledInput = styled('input', {
    '&:focus': {
        borderWidth: '1px',
        borderColor: '$backgroundPrimary',
    },
});

export default React.forwardRef((props, ref) => (
    <StyledInput
        {...props}
        autoComplete="off"
        ref={ref}
        className={`
            outline-none
            pl-3 
            py-2 pr-3 border 
            border-slate-300 
            placeholder-slate-400 block 
            w-full text-sm
            ${isHasProperty(props, 'extendClassName') ? props.extendClassName : ''}
        `}
    />
));
