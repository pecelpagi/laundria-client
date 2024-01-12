import React, { useContext } from 'react'
import ComponentContext from './ComponentContext'
import { CHANGE_BY_TYPE } from './enums';
import * as DatePickerComponent from './datepicker.components';

export const DisplaySelector = () => {
    const { currentChangeBy, selected, onDateSelected, onOffsetChanged, dateToDisplay } = useContext(ComponentContext);

    if (currentChangeBy === CHANGE_BY_TYPE.DATE) {
        return (<DatePickerComponent.Datepicker {...{ date: dateToDisplay, selected, onDateSelected, onOffsetChanged }} />);
    }

    if (currentChangeBy === CHANGE_BY_TYPE.MONTH) {
        return (<DatePickerComponent.MonthsDisplay />);
    }

    if (currentChangeBy === CHANGE_BY_TYPE.YEAR) {
        return (<DatePickerComponent.YearsDisplay />);
    }

    return null;
}
