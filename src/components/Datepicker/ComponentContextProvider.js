import moment from 'moment'
import React, { Component } from 'react'
import { CHANGE_BY_TYPE } from './enums';
import ComponentContext from './ComponentContext';

class ComponentContextProvider extends Component {
    state = {
        currentOffsetMonthDisplay: 0,
        dateToDisplay: moment().toDate(),
        currentChangeBy: CHANGE_BY_TYPE.DATE,
    }

    componentDidMount = () => {
        const { selected } = this.props;

        this.setState({ dateToDisplay: selected });
    }

    handleChangeDateToDisplay = (changeBy = CHANGE_BY_TYPE.MONTH, val) => {
        if (changeBy === CHANGE_BY_TYPE.MONTH) {
            this.handleChangeDateToDisplayByMonth(val);
        } else if (changeBy === CHANGE_BY_TYPE.YEAR) {
            this.handleChangeDateToDisplayByYear(val);
        }
    }

    handleChangeDateToDisplayByMonth = (val) => {
        const { dateToDisplay } = this.state;
        const year = moment(dateToDisplay).format('YYYY');

        this.setState({
            dateToDisplay: moment(`${year}-${val}`, 'YYYY-MMMM').toDate(),
            currentChangeBy: CHANGE_BY_TYPE.DATE,
            currentOffsetMonthDisplay: 0,
        });
    }

    handleChangeDateToDisplayByYear = (val) => {
        const { dateToDisplay } = this.state;
        const month = moment(dateToDisplay).format('MM');

        this.setState({
            dateToDisplay: moment(`${val}-${month}`, 'YYYY-MM').toDate(),
            currentChangeBy: CHANGE_BY_TYPE.MONTH,
        });
    }

    handleSetCurrentChangeBy = (val) => {
        this.setState({ currentChangeBy: val });
    }

    handleOffsetChanged = (val) => {
        this.setState({ currentOffsetMonthDisplay: val });
    }

    createContextValue = () => {
        const contextData = {
            ...this.props,
            ...this.state,
        };

        return {
            ...contextData,
            onChangeDateToDisplay: this.handleChangeDateToDisplay,
            onSetCurrentChangeBy: this.handleSetCurrentChangeBy,
            onOffsetChanged: this.handleOffsetChanged,
        }
    }


    render() {
        const { children } = this.props;

        return (
            <ComponentContext.Provider value={this.createContextValue()}>
                {children}
            </ComponentContext.Provider>
        )
    }
}

export default ComponentContextProvider;