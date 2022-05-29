import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Body from "./Body";
import Pagination from "./Pagination";
import OverlayLoading from "./OverlayLoading";
import SelectLimit from "./SelectLimit";
import InputKeyword from "./InputKeyword";

class Table extends React.Component {
    static propTypes = {
        columns: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
        })).isRequired,
        onFetch: PropTypes.func,
        withWrapperRender: PropTypes.func,
        onRowClick: PropTypes.func,
    }

    static defaultProps = {
        withWrapperRender: undefined,
        onFetch: () => { },
        onRowClick: () => { },
    }

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

        this.refetchIdle = setTimeout(() => {
            this.refetchData();
        }, 500);
    }

    componentWillUnmount = () => { if (this.refetchIdle) clearTimeout(this.refetchIdle); }

    handleSetFetching = (isFetching) => { this.setState({ isFetching }); }

    handleFetchData = async (state) => {
        const { onFetch } = this.props;

        this.handleSetFetching(true);

        const { data, totalPage = 0 } = await onFetch(state);

        this.handleSetFetching(false);

        this.setState({ data, totalPage: Number(totalPage) });
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

    renderTable = () => {
        const { data, isFetching, totalPage, page } = this.state;
        const { columns, onRowClick } = this.props;

        return (
            <div className="relative">
                <div className="overflow-x-auto w-full">
                    <table className="border-collapse table-auto w-full whitespace-nowrap text-sm mb-3">
                        <Header {...{ columns }} />
                        <Body {...{ columns, data, onRowClick }} />
                    </table>
                </div>
                <Pagination {...{ totalPage, page }} onChange={this.handleChangePage} />
                {isFetching ? <OverlayLoading /> : null}
            </div>
        );
    }

    renderFilterText = () => (<InputKeyword onSearch={this.handleSearchData} />);

    handleChangeLimitData = (val) => {
        this.setState({ limit: val, page: 0 }, () => {
            this.refetchData();
        });
    }

    handleSearchData = (val) => {
        if (this.searchDataIdle) clearTimeout(this.searchDataIdle);
        this.searchDataIdle = setTimeout(() => {
            this.setState({ filterText: val }, () => { this.refetchData(); });
        }, 700);
    }

    renderLimitData = () => {
        const { limit } = this.state;

        return (<SelectLimit value={limit} onChange={this.handleChangeLimitData} />)
    };

    render() {
        const { withWrapperRender } = this.props;

        if (withWrapperRender) {
            // render with wrapper
            return withWrapperRender({
                InputSearch: this.renderFilterText,
                PageSize: this.renderLimitData,
                makeTable: this.renderTable,
            });
        }

        // render without wrapper: default
        return this.renderTable();
    }
}

export default Table;