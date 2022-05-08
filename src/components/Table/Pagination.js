import { useEffect, useState } from "react";

export default ({ totalPage, page, onChange }) => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        let newPages = [];

        for (let i = 0; i < totalPage; i += 1) {
            newPages = [...newPages, (
                <li
                    key={i}
                    className="inline-block mr-2">
                    <button onClick={() => onChange(i)} className={`rounded-lg h-6 w-6 text-sm ${i === page ? 'bg-black text-white' : ''}`}>{i + 1}</button>
                </li>
            )];
        }

        setPages(newPages);
    }, [totalPage, page]);

    return (
        <div className="flex justify-center">
            <ul className="list-none">
                {!(page === 0) && (
                    <li className="inline-block mr-2">
                        <button type="button" className="rounded-lg text-sm" onClick={() => onChange(page - 1)}>
                            <span>&laquo;</span>
                        </button>
                    </li>
                )}
                {pages}
                {!(page === (totalPage - 1)) && (
                    <li className="inline-block">
                        <button type="button" className="rounded-lg text-sm" onClick={() => onChange(page + 1)}>
                            <span>&raquo;</span>
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}