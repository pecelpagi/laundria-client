import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';
import menuData from './menuData';
import { matchMediaChecker, MATCH_MEDIA_TYPE } from '../../utils';
import StyledButton from '../../components/StyledButton';
import Logo from '../../images/logo.png';
import { ReactComponent as IconLogout } from '../../images/icon-logout.svg';
import MainLayoutContext from '../MainLayoutContext';
import Box from '../../components/Box';

const iconSize = 20;

const Wrapper = styled('div', {
    boxShadow: '1px 0px 10px 2px rgba(0, 0, 0, 0.1)',
    backgroundColor: '$backgroundSecondary',
    '& li': {
        'a': {
            height: 44,
        },
        '&.active a, a:hover': {
            borderLeft: '4px solid $backgroundPrimary',
            backgroundColor: '$backgroundTertiary'
        }
    }
});

const isActiveChecker = (menu, lastClickedId) => {
    if (lastClickedId) return (lastClickedId === menu.id)

    const splits = String(window.location.pathname).split('/').filter(val => val);

    if (splits.length > 0) return `/${splits[0]}` === menu.link;

    return false;
}

const SideMenu = () => {
    const { onShowingSidebarMenu, isShowingSidebarMenu } = useContext(MainLayoutContext);
    const [lastClickedId, setLastClickedId] = useState("");
    let data = menuData();

    const handleHideSidebarMenu = (x) => {
        setLastClickedId(x.id);
        
        if (matchMediaChecker(MATCH_MEDIA_TYPE.LG)) return;

        onShowingSidebarMenu(false);
    }

    return (
        <Wrapper
            className={`
                items-center flex flex-col overflow-y-auto fixed top-0 
                py-4 px-0 h-full w-48 transition-all`
            }
            css={{
                left: isShowingSidebarMenu ? 0 : -195
            }}
            >
            <Box className='p-4 pt-0'>
                <img style={{ width: 'fit-content' }} src={Logo} alt="" />
            </Box>
            <ul className='w-full'>
                {data.map(x => (
                    <li key={x.id} className={isActiveChecker(x, lastClickedId) ? 'active' : ''}>
                        <Link to={x.link} className="text-black w-full block flex gap-3 px-3 items-center transition-all" onClick={() => handleHideSidebarMenu(x)}>
                            {x.icon()}
                            <span className="text-sm">{x.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
}

export default SideMenu;