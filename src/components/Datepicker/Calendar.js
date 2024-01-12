import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { monthNamesShort, weekdayNamesShort } from './calendar.static-data';
import Box from '../Box';
import { StyledButton } from './calendar.styled-components';
import { useContext } from 'react';
import ComponentContext from './ComponentContext';
import { CHANGE_BY_TYPE } from './enums';

const Calendar = ({ calendars, getBackProps, getForwardProps, getDateProps }) => {
    const { onSetCurrentChangeBy } = useContext(ComponentContext);

    if (calendars.length) {
        return (
            <div style={{ margin: '0 auto', textAlign: 'center', fontSize: 14 }}>
                {calendars.map(calendar => (
                    <div
                        key={`${calendar.month}${calendar.year}`}
                        style={{
                            display: 'inline-block',
                            width: '300px',
                            padding: '8px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <div className="flex flex-row items-center">
                            <StyledButton type="button" className='rounded' {...getBackProps({ calendars })} css={{ marginLeft: 4 }}><ChevronLeftIcon /></StyledButton>
                            <div className="flex flex-1 justify-center">
                                <StyledButton onClick={() => { onSetCurrentChangeBy(CHANGE_BY_TYPE.MONTH) }} className='rounded' css={{ width: 'fit-content', padding: '0 12px' }} type="button">
                                    {monthNamesShort[calendar.month]} {calendar.year}
                                </StyledButton>
                            </div>
                            <StyledButton type="button" className='rounded' {...getForwardProps({ calendars })} css={{ marginRight: 4 }}><ChevronRightIcon /></StyledButton>
                        </div>
                        <hr style={{ borderStyle: "solid", marginBottom: "15px", marginTop: "10px" }} />
                        <Box
                            css={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(7, 1fr)',
                            }}
                        >
                            {weekdayNamesShort.map(weekday => (
                                <div
                                    key={`${calendar.month}${calendar.year}${weekday}`}
                                    style={{
                                        marginBottom: 5,
                                        border: 'none',
                                        background: 'transparent',
                                    }}
                                >
                                    {weekday}
                                </div>
                            ))}
                            {calendar.weeks.map((week, weekIndex) =>
                                week.map((dateObj, index) => {
                                    let key = `${calendar.month}${calendar.year}${weekIndex}${index}`;
                                    if (!dateObj) {
                                        return (
                                            <div
                                                key={key}
                                                style={{
                                                    padding: '8px',
                                                    border: 'none',
                                                    background: 'transparent'
                                                }}
                                            />
                                        );
                                    }
                                    let { date, selected, selectable, today, nextMonth, prevMonth } = dateObj;
                                    let background = today ? '#f5f4f7' : '';
                                    background = selected ? '#24292f' : background;
                                    background = !selectable ? 'teal' : background;

                                    let color = today ? '#24292f' : '';
                                    color = selected ? '#FFFFFF' : color;

                                    if (nextMonth || prevMonth) color = '#00000066';

                                    return (
                                        <StyledButton
                                            css={{
                                                color,
                                                padding: '8px',
                                                border: 'none',
                                                background
                                            }}
                                            type="button"
                                            key={key}
                                            className={selected ? 'selected-date rounded-full' : 'rounded'}
                                            {...getDateProps({ dateObj })}
                                        >
                                            {selectable ? date.getDate() : 'X'}
                                        </StyledButton>
                                    );
                                })
                            )}
                        </Box>
                    </div>
                ))}
            </div>
        );
    }
    return null;
}

export default Calendar;