import React from 'react';
import PropTypes from "prop-types";
import ComponentContext from './ComponentContext';

class ComponentContextProvider extends React.Component {
    state = {
        limit: "5",
        page: 0,
        filterKeyword: '',
    }

    componentDidMount = () => {
        const { defaultFilterKeyword } = this.props;

        if (defaultFilterKeyword) this.handleSetFilterKeyword(defaultFilterKeyword)
    }

    handleSearching = (val) => {
        const { limit } = this.state;
        const { onFetch } = this.props;

        this.setState({ filterKeyword: val, page: 0 }, () => {
            onFetch({ search: val, limit, page: 1 });
        });
    }

    handleSetFilterKeyword = (val) => {
        this.setState({ filterKeyword: val });

        if (this.searchDataIdle) clearTimeout(this.searchDataIdle);
        this.searchDataIdle = setTimeout(() => {
            this.handleSearching(val);
        }, 700);
    }

    handleSetLimit = (val) => {
        const { filterKeyword } = this.state;
        const { onFetch } = this.props;

        this.setState({ limit: val, page: 0 }, () => {
            onFetch({ search: filterKeyword, limit: val, page: 0 });
        });
    }

    handleChangePage = (val) => {
        const { filterKeyword, limit } = this.state;
        const { onFetch } = this.props;

        this.setState({ page: val }, () => {
            onFetch({ search: filterKeyword, limit, page: val + 1 });
        });
    }

    handleRefetchData = () => {
        const { filterKeyword, limit, page } = this.state;
        const { onFetch } = this.props;
        
        onFetch({ search: filterKeyword, limit, page });
    }

    createContextValue = () => {
        return {
            ...this.props,
            ...this.state,
            onSetLimit: this.handleSetLimit,
            onSetFilterKeyword: this.handleSetFilterKeyword,
            onChangePage: this.handleChangePage,
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

ComponentContext.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    defaultFilterKeyword: PropTypes.string,
    onFetch: PropTypes.func.isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
    })).isRequired,
    totalPage: PropTypes.number.isRequired,
    onRowClick: PropTypes.func,
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

ComponentContext.defaultProps = {
    defaultFilterKeyword: '',
    onRowClick: () => {},
    loading: false,
};

export default ComponentContextProvider;