import React from 'react';
import {
    DotsHorizontalIcon
} from '@radix-ui/react-icons';
import Box from '../Box';

const iconSize = 20;

const StyledInput = (props) => {
    const { onBrowse, ...rest } = props;

    return (
        <Box
            className={`
                pr-0 bg-white border 
                border-slate-300 
                placeholder-slate-400 flex
                w-full
            `}
        >
            <input
                {...rest}
                autoComplete="off"
                className={`
                    pl-3 
                    outline-none
                    flex-1
                    placeholder-slate-400
                `}
                disabled
            />
            <button type="button" className="px-4 py-2" onClick={onBrowse}>
                <DotsHorizontalIcon width={iconSize} height={iconSize} />
            </button>
        </Box>
    )
};

export default StyledInput;
