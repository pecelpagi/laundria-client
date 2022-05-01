import React, { useEffect, useState } from 'react';
import { styled } from '../../stitches.config';
import menuData from './menuData';

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
    const [isShowing, setShowMenu] = useState(false);
    let data = menuData();
    
    useEffect(() => {
        setTimeout(() => {
            setShowMenu(true);
        }, 5000);
    }, [])
    
    return (
        <Wrapper className={`fixed top-0 h-full w-52 pt-16 transition-all ${isShowing ? 'left-0' : '-left-52'}`}>
            <ul>
                {data.map(x => (<li key={x.id}><a href="#" className="block px-6 py-4"><span className="flex gap-2 text-sm items-center">{x.icon()}{x.title}</span></a></li>))}
            </ul>
        </Wrapper>
    );
}