import React, { useContext } from "react";
import Spinner from "../../../components/Spinner";
import * as ComponentChild from './list.components';
import * as StyledComponent from './list.styled-components';
import { useBusinessLogic } from "./list.hooks";
import ComponentContext from "./ComponentContext";

const List = () => {
    const { loading } = useContext(ComponentContext);
    const { customers, setActiveId, activeId, wrapperRef, search } = useBusinessLogic();

    return (
        <div className="relative">
            <StyledComponent.Wrapper ref={wrapperRef} className={`flex gap-2 flex-col text-sm overflow-y-scroll ${customers.length === 0 ? 'hidden' : ''}`}>
                {customers.map(x => (
                    <ComponentChild.RowData
                        key={x.id}
                        data={x}
                        onClick={() => { setActiveId(x.id); }}
                        activeId={activeId}
                    />
                ))}
            </StyledComponent.Wrapper>
            {loading ? <Spinner /> : null}
            {(customers.length === 0) && (
                <div className="flex flex-col h-44 items-center justify-center text-sm">
                    {search ? <span className="text-center">Pencarian dengan kata kunci <b>{search}</b> tidak ditemukan.</span> : 'Data Customer masih kosong.'}
                </div>
            )}
        </div>
    );
}

export default List;