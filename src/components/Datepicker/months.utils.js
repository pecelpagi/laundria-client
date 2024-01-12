import moment from 'moment';

export const handleSelectedMonth = ({ currentOffsetMonthDisplay, dateToDisplay }) => {
    return moment(dateToDisplay).add(currentOffsetMonthDisplay, 'months').format('MM');
}