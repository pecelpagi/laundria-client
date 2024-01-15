import { useState } from 'react';
import InputText from '../../components/V2InputText';

const InputKeyword = ({ onSearch, initialFilterText }) => {
    const [value, setValue] = useState(initialFilterText);

    return (
        <InputText
            css={{
                width: 300,
            }}
            value={value}
            name="filter_keyword"
            onChange={(e) => {
                setValue(e.target.value);
                onSearch(e.target.value);
            }}
        />
    );
}

export default InputKeyword;