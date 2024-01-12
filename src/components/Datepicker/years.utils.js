import moment from 'moment';

export const createStartYear = ({ currentOffsetYear, dateToDisplay }) => {
    return moment(dateToDisplay, 'YYYY').add(12 * currentOffsetYear, 'years').format('YYYY');
}

export const createEndYear = ({ startYear }) => {
    return moment(startYear, 'YYYY').add(12, 'years').format('YYYY');
}

export const createYearRange = ({ startYear, endYear }) => {
    const yearRange = [];

    for (let i = +startYear; i < +endYear; i += 1) {
        yearRange.push(i);
    }

    return yearRange;
}

export const createSelectedYear = ({ currentOffsetMonthDisplay, dateToDisplay }) => {
    return moment(dateToDisplay).add(currentOffsetMonthDisplay, 'months').format('YYYY');
}