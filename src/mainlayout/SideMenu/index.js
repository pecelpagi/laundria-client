import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';
import menuData from './menuData';
import { matchMediaChecker, MATCH_MEDIA_TYPE } from '../../utils';
import StyledButton from '../../components/StyledButton';
import Logo from '../../images/logo.png';
import { ReactComponent as IconLogout } from '../../images/icon-logout.svg';
import MainLayoutContext from '../MainLayoutContext';

const iconSize = 24;

const Wrapper = styled('div', {
    boxShadow: '1px 0px 10px 2px rgba(0, 0, 0, 0.1)',
    backgroundColor: '$backgroundSecondary',
    '& li': {
        marginBottom: 8,
        color: '$colorSecondary',
        'a': {
            borderRadius: 8,
        },
        '&.active a, & a:hover': {
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
                items-center flex gap-6 flex-col overflow-y-auto fixed top-0 
                py-4 px-5 h-full w-48 transition-all`
            }
            css={{
                left: isShowingSidebarMenu ? 0 : -195
            }}
            >
            <img style={{ width: 'fit-content' }} src={Logo} alt="" />
            <ul className='w-full flex-1'>
                {data.map(x => (
                    <li key={x.id} className={isActiveChecker(x, lastClickedId) ? 'active' : ''}>
                        <Link to={x.link} className="w-full block p-4" onClick={() => handleHideSidebarMenu(x)}>
                            <span className="text-sm">{x.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <StyledButton className="block w-full text-sm py-3 flex items-center" type="button" variant="primary">
                <span className='flex-1 text-left'>Keluar</span>
                <IconLogout {...{ height: iconSize, width: iconSize }} viewBox={`0 0 100 100`} />
            </StyledButton>
        </Wrapper>
    );
}

export default SideMenu;