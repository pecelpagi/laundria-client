
import React, { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import MenuButton from './MenuButton';
import MenuList from './MenuList';

export default () => {
    const [isOpening, setOpen] = useState(false);
    const handleToggleMenu = () => { setOpen(!isOpening); };

    const handleClickOutside = (e) => {
        if (e.target.id !== "dot-menu-button" && e.target.id !== "dot-menu-icon") setOpen(false);
    }

    return (
        <React.Fragment>
            <MenuButton onClick={handleToggleMenu} />
            <Popover.Root open={isOpening} defaultOpen={false}>
                <Popover.Trigger />
                <Popover.Content onPointerDownOutside={handleClickOutside} sideOffset={20} align="start">
                    <MenuList />
                </Popover.Content>
            </Popover.Root>
        </React.Fragment>
    );
}