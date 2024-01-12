import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { monthNames } from './calendar.static-data';
import Box from '../Box';
import { StyledButton } from './calendar.styled-components';
import { useContext, useMemo } from 'react';
import ComponentContext from './ComponentContext';
import moment from 'moment';
import { CHANGE_BY_TYPE } from './enums';
import * as ComponentUtil from './months.utils';

const Months = () => {
    const { currentOffsetMonthDisplay, dateToDisplay, onChangeDateToDisplay, onSetCurrentChangeBy } = useContext(ComponentContext);
    const selectedYear = useMemo(() => moment(dateToDisplay).format('YYYY'), [dateToDisplay]);
    const selectedMonth = useMemo(() => ComponentUtil.handleSelectedMonth({ currentOffsetMonthDisplay, dateToDisplay }), [currentOffsetMonthDisplay, dateToDisplay]);

    return (
        <div style={{ margin: '0 auto', textAlign: 'center', fontSize: 14 }}>
            <div
                style={{
                    display: 'inline-block',
                    width: '300px',
                    padding: '8px',
                    boxSizing: 'border-box'
                }}
            >
                <div className="flex flex-row items-center">
                    <StyledButton onClick={() => { onChangeDateToDisplay(CHANGE_BY_TYPE.YEAR, (+selectedYear - 1)); }} type="button" className='rounded' css={{ marginLeft: 4 }}><ChevronLeftIcon /></StyledButton>
                    <div className="flex flex-1 justify-center">
                        <StyledButton className='rounded' css={{ width: 'fit-content', padding: '0 12px' }} onClick={() => { onSetCurrentChangeBy(CHANGE_BY_TYPE.YEAR); }} type="button">
                            {selectedYear}
                        </StyledButton>
                    </div>
                    <StyledButton onClick={() => { onChangeDateToDisplay(CHANGE_BY_TYPE.YEAR, (+selectedYear + 1)); }} type="button" className='rounded' css={{ marginRight: 4 }}><ChevronRightIcon /></StyledButton>
                </div>
                <hr style={{ borderStyle: "solid", marginBottom: "15px", marginTop: "10px" }} />
                <Box
                    css={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                    }}
                    className='gap-4'
                >
                    {monthNames.map((monthName, i) => (
                        <StyledButton onClick={() => { onChangeDateToDisplay(CHANGE_BY_TYPE.MONTH, monthName) }} className={`rounded ${(i + 1) === (+selectedMonth) ? 'selected' : ''}`} css={{ width: '100%', padding: '0 12px' }} type="button">
                            {monthName}
                        </StyledButton>
                    ))}
                </Box>
            </div>
        </div>
    );
}

export default Months;