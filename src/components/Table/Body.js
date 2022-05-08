import { isHasProperty } from "../../utils";

const EmptyRow = ({ columns }) => (
    <tr>
        <td colSpan={columns.length} className="text-center">Tidak ada data</td>
    </tr>
)

export default ({ columns, data, onRowClick }) => {
    return (
        <tbody className="divide-y divide-solid">
            {data && data.length === 0 && <EmptyRow {...{ columns }} />}
            {data && data.map((x, i) => (
                <tr key={i} onClick={() => { onRowClick(x); }} className="hover:bg-slate-50 hover:cursor-pointer">
                    {columns.map(col => (<td className="py-2 px-1.5" key={`${i}${col.id}`}>{isHasProperty(col, "customComponent") ? col.customComponent(x[col.id], x) : x[col.id]}</td>))}
                </tr>
            ))}
        </tbody>
    );
}