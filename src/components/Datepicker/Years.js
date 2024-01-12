import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Box from '../Box';
import { StyledButton } from './calendar.styled-components';
import { useContext, useMemo } from 'react';
import ComponentContext from './ComponentContext';
import { CHANGE_BY_TYPE } from './enums';
import * as ComponentUtil from './years.utils';
import { useYearBusinessLogic } from './years.hooks';

const Years = () => {
    const { currentOffsetMonthDisplay, dateToDisplay, onChangeDateToDisplay } = useContext(ComponentContext);
    const { currentOffsetYear, onBackYear, onNextYear } = useYearBusinessLogic();
    const startYear = useMemo(() => ComponentUtil.createStartYear({ currentOffsetYear, dateToDisplay }), [dateToDisplay, currentOffsetYear]);
    const endYear = useMemo(() => ComponentUtil.createEndYear({ startYear }), [startYear]);
    const yearRange = useMemo(() => ComponentUtil.createYearRange({ startYear, endYear }), [startYear, endYear]);
    const selectedYear = useMemo(() => ComponentUtil.createSelectedYear({ currentOffsetMonthDisplay, dateToDisplay }), [currentOffsetMonthDisplay, dateToDisplay]);

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
                    <StyledButton type="button" className='rounded' onClick={onBackYear} css={{ marginLeft: 4 }}><ChevronLeftIcon /></StyledButton>
                    <div className="flex flex-1 justify-center">
                        {`${startYear} - ${endYear}`}
                    </div>
                    <StyledButton type="button" className='rounded' onClick={onNextYear} css={{ marginRight: 4 }}><ChevronRightIcon /></StyledButton>
                </div>
                <hr style={{ borderStyle: "solid", marginBottom: "15px", marginTop: "10px" }} />
                <Box
                    css={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                    }}
                    className='gap-4'
                >
                    {yearRange.map((year, i) => (
                        <StyledButton key={year} onClick={() => { onChangeDateToDisplay(CHANGE_BY_TYPE.YEAR, year) }} className={`rounded ${(+year) === (+selectedYear) ? 'selected' : ''}`} css={{ width: '100%', padding: '0 12px' }} type="button">
                            {year}
                        </StyledButton>
                    ))}
                </Box>
            </div>
        </div>
    );
}

export default Years;