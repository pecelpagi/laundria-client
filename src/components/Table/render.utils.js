import Header from "./Header";
import Body from "./Body";
import Pagination from "./Pagination";
import OverlayLoading from "./OverlayLoading";
import SelectLimit from "./SelectLimit";
import InputKeyword from "./InputKeyword";

export const renderFilterText = ({ onSearchData }) => (<InputKeyword onSearch={onSearchData} />);

export const renderTable = ({ state, props, onChangePage }) => {
    const { data, isFetching, totalPage, page } = state;
    const { columns, onRowClick } = props;

    return (
        <div className="relative">
            <div className="overflow-x-auto w-full">
                <table className="border-collapse table-auto w-full whitespace-nowrap text-sm mb-3">
                    <Header {...{ columns }} />
                    <Body {...{ columns, data, onRowClick }} />
                </table>
            </div>
            <Pagination {...{ totalPage, page }} onChange={onChangePage} />
            {isFetching ? <OverlayLoading /> : null}
        </div>
    );
}

export const renderLimitData = ({ state, onChangeLimitData }) => {
    const { limit } = state;

    return (<SelectLimit value={limit} onChange={onChangeLimitData} />)
};

