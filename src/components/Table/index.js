import React from "react";
import Header from "./Header";
import Body from "./Body";
import Pagination from "./Pagination";
import OverlayLoading from "./OverlayLoading";

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
        this.setFetching(true);

        this.refetchIdle = setTimeout(() => {
            this.refetchData();
        }, 500);
    }

    componentWillUnmount = () => { if (this.refetchIdle) clearTimeout(this.refetchIdle); }

    handleSetFetching = (isFetching) => { this.setState({ isFetching }); }

    handleFetchData = async (state) => {
        try {
            const { onFetch } = this.props;

            this.handleSetFetching(true);

            const { data, totalPage = 0 } = await onFetch(state);

            this.handleSetFetching(false);

            this.setState({ data, totalPage: Number(totalPage) });
        } catch (e) {
            console.log(e);
        }
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
                <table className="table-auto">
                    <Header {...{ columns }} />
                    <Body {...{ columns, data, onRowClick }} />
                </table>
                <Pagination {...{ totalPage, page }} onChange={this.handleChangePage} />
                {isFetching ? <OverlayLoading /> : null}
            </div>
        );
    }

    renderFilterText = () => (<div />);

    renderLimitData = () => (<div />);

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