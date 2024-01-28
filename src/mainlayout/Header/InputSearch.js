import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { styled } from '../../stitches.config';

const iconSize = 24;

const Wrapper = styled('div', {
    display: 'flex',
    backgroundColor: '$backgroundTertiary',
    maxWidth: 375,
    borderRadius: 8,
});

const InputSearch = () => {
    const location = useLocation();
    const splitLocation = String(location.search).split("q=");

    const keyword = splitLocation.length > 1 ? splitLocation[1] : '';

    const [value, setValue] = useState(keyword);

    const handleSearch = () => {
        if (String(value).length > 0) {
            window.location.href = `/search?q=${value}`;
        }
    }

    return (
        <Wrapper>
            <div className='flex items-center px-4'>
                <MagnifyingGlassIcon {...{ height: iconSize, width: iconSize }} />
            </div>
            <input
                className='flex-1 bg-transparent py-3 outline-none'
                type="text" value={value}
                onChange={(e) => { setValue(e.target.value) }}
                placeholder="Masukkan kata kunci pencarian ..."
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        handleSearch();
                }
                }
            />
        </Wrapper>
    );
}

export default InputSearch;