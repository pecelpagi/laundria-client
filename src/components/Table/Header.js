import { isHasProperty } from "../../utils";

const createStyleColumnHeader = (obj, i) => {
    if (isHasProperty(obj, "width")) return { width: obj.width };
    if (i === 0) return { minWidth: "130px" };

    return {};
}

export default ({ columns }) => {
    return (
        <thead>
            <tr>
                {columns.map((x, i) => (<th key={x.id} className="border-b text-left py-2 px-1.5" style={createStyleColumnHeader(x, i)}>{x.title}</th>))}
            </tr>
        </thead>
    )
}