
import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import MenuButton from './MenuButton';
import MenuList from './MenuList';
import { useAccountMenuBusinessLogic } from './hooks';

const AccountMenu = () => {
    const {
        isOpen,
        onToggleMenu,
        onClose,
        onClickOutside,
    } = useAccountMenuBusinessLogic();

    return (
        <React.Fragment>
            <Popover.Root open={isOpen} defaultOpen={false}>
                <Popover.Anchor>
                    <MenuButton onClick={onToggleMenu} />
                </Popover.Anchor>
                <Popover.Portal>
                    <Popover.Content align="end" alignOffset={15} onPointerDownOutside={onClickOutside}>
                        <MenuList onClick={onClose} />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </React.Fragment>
    );
}

export default AccountMenu;