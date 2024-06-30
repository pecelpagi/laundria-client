import React, { useCallback, useContext } from 'react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import AccountMenu from '../../components/AccountMenu';
import InputSearch from './InputSearch';
import Box from '../../components/Box';
import MainLayoutContext from '../MainLayoutContext';

const iconSize = 20;

const Header = () => {
    const { onShowingSidebarMenu, isShowingSidebarMenu } = useContext(MainLayoutContext);

    const toggleSidebarMenu = useCallback(() => {
        onShowingSidebarMenu(!isShowingSidebarMenu);
    }, [isShowingSidebarMenu, onShowingSidebarMenu]);

    return (
        <div className={`fixed transition-all top-0 left-0 right-0 w-full bg-white py-3 px-6 ${isShowingSidebarMenu ? 'pl-56' : ''}`}>
            <Box
                css={{
                    display: 'grid',
                    alignItems: 'center',
                    gap: 20,
                    gridTemplateColumns: 'auto 1fr auto'
                }}
            >
                <Box className='flex items-center'>
                    <button type='button' onClick={toggleSidebarMenu}><HamburgerMenuIcon width={iconSize} height={iconSize} /></button>
                </Box>
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