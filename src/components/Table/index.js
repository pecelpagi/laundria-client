import React from "react";
import PropTypes from "prop-types";
import * as renderUtil from './render.utils';

class Table extends React.Component {
    searchDataIdle = null;
    refetchIdle = null;
    state = {
        data: [],
        limit: "5",
        page: 0,
        totalPage: 0,
        filterText: "",
        isFetching: false,
    }

    componentDidMount = () => {
        this.handleSetFetching(true);

        if (!this.props.initialFilterText) {
            this.refetchIdle = setTimeout(() => {
                this.refetchData();
            }, 500);
        }
    }

    componentWillUnmount = () => { if (this.refetchIdle) clearTimeout(this.refetchIdle); }

    handleSetFetching = (isFetching) => { this.setState({ isFetching }); }

    handleFetchData = async (state) => {
        const { onFetch } = this.props;

        this.handleSetFetching(true);

        const { data, totalPage = 0, err } = await onFetch(state);

        this.handleSetFetching(false);

        if (!err) this.setState({ data, totalPage: Number(totalPage) });
    };

    refetchData = async () => {
        const { page, limit, filterText } = this.state;

        await this.handleFetchData({ page: page + 1, limit: Number(limit), search: filterText });
    };

    handleChangePage = (val) => {
        this.setState({ page: val }, () => {
            this.refetchData();
        });
    }

    handleChangeLimitData = (val) => {
        this.setState({ limit: val, page: 0 }, () => {
            this.refetchData();
        });
    }

    handleSearchData = (val) => {
        if (this.searchDataIdle) clearTimeout(this.searchDataIdle);
        this.searchDataIdle = setTimeout(() => {
            this.setState({ filterText: val, page: 0 }, () => { this.refetchData(); });
        }, 700);
    }

    handleRenderInputSearch = () => renderUtil.renderFilterText({ onSearchData: this.handleSearchData, initialFilterText: this.props.initialFilterText });

    handleRenderPageSize = () => renderUtil.renderLimitData({ state: this.state, onChangeLimitData: this.handleChangeLimitData });

    handleMakeTable = () => renderUtil.renderTable({ state: this.state, props: this.props, onChangePage: this.handleChangePage });

    render() {
        const { withWrapperRender } = this.props;

        if (withWrapperRender) {
            return withWrapperRender({
                InputSearch: this.handleRenderInputSearch,
                PageSize: this.handleRenderPageSize,
                makeTable: this.handleMakeTable,
            });
        }

        return this.renderTable();
    }
}

Table.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
    })).isRequired,
    onFetch: PropTypes.func,
    withWrapperRender: PropTypes.func,
    onRowClick: PropTypes.func,
    initialFilterText: PropTypes.string,
};

Table.defaultProps = {
    withWrapperRender: undefined,
    onFetch: () => { },
    onRowClick: () => { },
    initialFilterText: '',
};

export default Table;