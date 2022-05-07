import React from 'react';
import { styled } from '../stitches.config';

const StyledInput = styled('input', {
    '&:focus': {
        borderColor: '$backgroundPrimary',
        outlineColor: '$backgroundPrimary',
    },
});

export default React.forwardRef((props, ref) => (
    <StyledInput
        {...props}
        autoComplete="off"
        ref={ref}
        className={`
            mt-1 pl-3 
            py-2 pr-10 bg-white border 
            shadow-sm border-slate-300 
            placeholder-slate-400 block 
            w-full rounded-md sm:text-sm
        `}
    />
));
