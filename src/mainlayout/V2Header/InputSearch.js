import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';
import { styled } from '../../stitches.config';

const iconSize = 24;

const Wrapper = styled('div', {
    display: 'flex',
    backgroundColor: '$backgroundTertiary',
    maxWidth: 375,
    borderRadius: 8,
});

const InputSearch = () => {
    const [value, setValue] = useState('');

    return (
        <Wrapper>
            <div className='flex items-center px-4'>
                <MagnifyingGlassIcon {...{ height: iconSize, width: iconSize }} />
            </div>
            <input className='flex-1 bg-transparent py-3 outline-none' type="text" value={value} onChange={(e) => { setValue(e.target.value) }} placeholder="Masukkan kata kunci pencarian ..." />
        </Wrapper>
    );
}

export default InputSearch;