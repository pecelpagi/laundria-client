import React, { useContext } from 'react'
import InputKeyword from './InputKeyword'
import SelectLimit from './SelectLimit'
import ComponentContext from './ComponentContext';

const Header = () => {
    const { title } = useContext(ComponentContext);

    return (
        <div className="flex p-3 flex-col sm:flex-row sm:justify-between items-center gap-2">
            <div className="w-full text-base font-semibold">{title}</div>
            <div className="w-full flex order-last justify-end gap-3">
                <InputKeyword />
                <SelectLimit />
            </div>
        </div>
    )
}

export default Header