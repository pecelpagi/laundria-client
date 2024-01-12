import React from 'react';
import moment from 'moment';
import { useDayzed } from 'dayzed';
import Calendar from './Calendar';
import { styled } from '../../stitches.config';
import Months from './Months';
import Years from './Years';

const StyledButton = styled('button', {});

export const SelectDateButton = React.forwardRef(({ selected, onClick }, ref) => {
    return (
        <StyledButton
            ref={ref}
            css={{
                '&:focus, &:hover': {
                    borderWidth: '1px',
                    borderColor: '$backgroundPrimary',
                },
            }}
            type="button"
            className={`
              outline-none
              pl-3 
              py-2 pr-10 border 
              border-slate-300 
              placeholder-slate-400 block 
              w-full text-sm
              text-left
            `}
            onClick={onClick}>{selected ? moment(selected).format('DD MMM YYYY') : '-'}</StyledButton>
    )
});

export const Datepicker = (props) => {
    const dayzedData = useDayzed(props);

    return <Calendar {...dayzedData} />;
}

export const MonthsDisplay = () => {
    return <Months />
}

export const YearsDisplay = () => {
    return <Years />
}
