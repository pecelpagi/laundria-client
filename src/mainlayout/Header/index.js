import React from 'react';
import AccountMenu from '../../components/AccountMenu';
import InputSearch from './InputSearch';
import Box from '../../components/Box';

const Header = () => {
    return (
        <div className="fixed top-2 left-0 right-0 w-full bg-white py-3 px-6 pl-56">
            <Box
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto'
                }}
            >
                <Box>
                    <InputSearch />
                </Box>
                <Box>
                    <AccountMenu />
                </Box>
            </Box>
        </div>
    );
}

export default Header;