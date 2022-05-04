import { fonts } from '../core';
import { styled } from '../stitches.config';

const StyledInput = styled('input', {
    '&:focus': {
        borderColor: '$backgroundPrimary',
        outlineColor: '$backgroundPrimary',
    },
});

export default (props) => {
    return <StyledInput {...props} className="mt-1 pl-3 py-2 pr-10 bg-white border shadow-sm border-slate-300 placeholder-slate-400 block w-full rounded-md sm:text-sm" />
};