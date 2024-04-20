import React from 'react';
import * as apiServiceUtility from './api-service.utils';
import ComponentContext from './ComponentContext';

class ComponentContextProvider extends React.Component {
    defaultState = {
        totalPage: 0,
        page: 0,
    };

    state = {
        loading: false,
        search: '',
        customers: [],
        ...this.defaultState,
    };

    setState = this.setState.bind(this);

    componentDidMount = () => { this.handleFetchCustomers(); }

    handleSetLoading = (loading) => { this.setState({ loading }); }

    handleFetchCustomers = async (isReplace = false) => {
        await apiServiceUtility.handleFetchCustomers({
            state: this.state, isReplace,
            onSetLoading: this.handleSetLoading, setState: this.setState
        });
    }

    handleChooseData = (val) => {
        const { onChange, refCollections } = this.props;
        onChange({ id: val.id, text: val.fullname, ...val, });
        refCollections.dataDialog.current.handleHideDialog();
    }

    handleSearchData = (search) => {
        this.setState({
            ...this.defaultState, search
        }, () => {
            const isReplace = true;
            this.handleFetchCustomers(isReplace);
        });
    }

    handleNextPage = () => {
        const { page, totalPage } = this.state;
        const newPage = page + 1;

        if (!(newPage < totalPage)) return;

        this.setState({
            page: newPage,
        }, () => {
            this.handleFetchCustomers();
        });
    }

    createContextValue = () => {
        const contextData = {
            ...this.props,
            ...this.state,
        };

        return {
            ...contextData,
            onNextPage: this.handleNextPage,
            onSearchData: this.handleSearchData,
            onChooseData: this.handleChooseData,
        }
    }

    render() {
        const { children } = this.props;

        const contextValue = this.createContextValue();

        return (
            <ComponentContext.Provider value={contextValue}>
                {children}
            </ComponentContext.Provider>
        );
    }
}

export default ComponentContextProvider;