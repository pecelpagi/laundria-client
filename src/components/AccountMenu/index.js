
import React, { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import MenuButton from './MenuButton';
import MenuList from './MenuList';

export default () => {
    const [isOpening, setOpen] = useState(false);
    const handleToggleMenu = () => { setOpen(!isOpening); };

    const handleClickOutside = (e) => {
        e.preventDefault();

        setOpen(false);
    }

    return (
        <React.Fragment>
            <MenuButton onClick={handleToggleMenu} />
            <Popover.Root open={isOpening} defaultOpen={false}>
                <Popover.Trigger />
                <Popover.Content onInteractOutside={handleClickOutside} sideOffset={20} align="start">
                    <MenuList />
                </Popover.Content>
            </Popover.Root>
        </React.Fragment>
    );
}