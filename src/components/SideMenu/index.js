import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';
import menuData from './menuData';
import { ComponentContext } from "../../mainlayout/Context";
import { matchMediaChecker, MATCH_MEDIA_TYPE } from '../../utils';

const Wrapper = styled('div', {
    backgroundColor: '$backgroundSecondary',
    '& li': {
        color: '$colorSecondary',
        '& a:hover': {
            backgroundColor: '$backgroundTertiary'
        }
    }
});

export default () => {
    const { isShowingSidebarMenu, onHideSidebar } = useContext(ComponentContext);
    let data = menuData();

    const handleHideSidebarMenu = () => {
        if (matchMediaChecker(MATCH_MEDIA_TYPE.LG)) return;

        onHideSidebar();
    }

    return (
        <Wrapper className={`overflow-y-auto fixed top-0 h-full w-52 pt-16 transition-all ${isShowingSidebarMenu ? 'left-0' : '-left-52'}`}>
            <ul>
                {data.map(x => (
                    <li key={x.id}>
                        <Link to={x.link} className="block px-6 py-4" onClick={handleHideSidebarMenu}>
                            <span className="flex gap-2 text-sm items-center">{x.icon()}{x.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
}