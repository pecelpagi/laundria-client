import { useEffect } from "react";

export default ({ totalPage, page, onChange }) => {
    let pages = [];

    useEffect(() => {
        for (let i = 0; i < totalPage; i += 1) {
            pages = [...pages, (
                <li
                    key={i}
                    className="inline-block">
                    <button onClick={() => onChange(i)}>{i + 1}</button>
                </li>
            )];
        }
    }, [totalPage]);

    return (
        <ul className="list-none">
            <li className="inline-block">
                <button type="button" onClick={() => onChange(page - 1)} disabled={page === 0}>
                    <span>&laquo;</span>
                    <span>Previous</span>
                </button>
            </li>
            {pages}
            <li className="inline-block">
                <button type="button" onClick={() => onChange(page + 1)} disabled={page === (totalPage - 1)}>
                    <span>&raquo;</span>
                    <span>Next</span>
                </button>
            </li>
        </ul>
    );
}