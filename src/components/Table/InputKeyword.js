import { useState } from 'react';
import InputText from '../../components/V2InputText';

const InputKeyword = ({ onSearch }) => {
    const [value, setValue] = useState("");

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