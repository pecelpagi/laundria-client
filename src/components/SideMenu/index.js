import React, { useContext } from 'react';
import { styled } from '../../stitches.config';
import menuData from './menuData';
import { ComponentContext } from "../../mainlayout/Context";

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
    const { isShowingSidebarMenu } = useContext(ComponentContext);
    let data = menuData();

    return (
        <Wrapper className={`fixed top-0 h-full w-52 pt-16 transition-all ${isShowingSidebarMenu ? 'left-0' : '-left-52'}`}>
            <ul>
                {data.map(x => (
                    <li key={x.id}>
                        <a href="#" className="block px-6 py-4">
                            <span className="flex gap-2 text-sm items-center">{x.icon()}{x.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
}