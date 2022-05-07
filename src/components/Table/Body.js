import { isHasProperty } from "../../utils";

const EmptyRow = () => (
    <tr>
        <td colSpan={columns.length} className="text-center">Tidak ada data</td>
    </tr>
)

export default ({ columns, data, onRowClick }) => {
    return (
        <tbody>
            {data && data.length === 0 && <EmptyRow />}
            {data && data.map((x, i) => (
                <tr key={i} onClick={() => { onRowClick(x); }}>
                    {columns.map(col => (<td key={`${i}${col.id}`}>{isHasProperty(col, "customComponent") ? col.customComponent(x[col.id], x) : x[col.id]}</td>))}
                </tr>
            ))}
        </tbody>
    );
}