import React, { useContext } from 'react';
import InputText from '../../components/InputText';
import ComponentContext from './ComponentContext';

const InputKeyword = () => {
    const { filterKeyword, onSetFilterKeyword } = useContext(ComponentContext);

    return (
        <InputText
            css={{
                width: 300,
            }}
            value={filterKeyword}
            onChange={(e) => {
                onSetFilterKeyword(e.target.value);
            }}
        />
    )
}

export default InputKeyword;