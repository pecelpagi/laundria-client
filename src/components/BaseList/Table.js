import React, { useContext } from 'react'
import { createStyleColumnHeader } from './utils'
import ComponentContext from './ComponentContext'
import OverlayLoading from './OverlayLoading';
import Pagination from './Pagination';
import { isHasProperty } from '../../utils';

const EmptyRow = ({ columns }) => (
    <tr>
        <td colSpan={columns.length} className="text-center">Tidak ada data</td>
    </tr>
)

const Table = () => {
    const { loading, columns, data, onRowClick } = useContext(ComponentContext);

    return (
        <div className="relative">
            <div className="overflow-x-auto w-full">
                <table className="border-collapse table-auto w-full whitespace-nowrap text-sm mb-3">
                    <thead>
                        <tr>
                            {columns.map((x, i) => (<th key={x.id} className="border-b-2 text-left py-2 px-1.5" style={createStyleColumnHeader(x, i)}>{x.title}</th>))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-solid">
                        {data && data.length === 0 && <EmptyRow {...{ columns }} />}
                        {data && data.map((x, i) => (
                            <tr key={i} onClick={() => { onRowClick(x); }} className="hover:bg-slate-50 hover:cursor-pointer">
                                {columns.map(col => (<td className="py-2 px-1.5" key={`${i}${col.id}`}>{isHasProperty(col, "customComponent") ? col.customComponent(x[col.id]) : x[col.id]}</td>))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination />
            {loading ? <OverlayLoading /> : null}
        </div>
    )
}

export default Table