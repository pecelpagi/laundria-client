import React from 'react';
import InputText from '../../../components/InputText';
import * as StyledComponent from './search-input.styled-components';
import { useBusinessLogic } from './search-input.hooks';

const SearchInput = () => {
    const { value, onInputKeyword } = useBusinessLogic();

    return (
        <StyledComponent.Wrapper>
            <InputText
                value={value}
                onChange={(e) => { onInputKeyword(e.target.value) }}
                placeholder="Cari ..."
            />
        </StyledComponent.Wrapper>
    )
}

export default SearchInput;