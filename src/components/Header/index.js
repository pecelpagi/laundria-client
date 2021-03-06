import React, { useContext } from 'react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Logo from '../Logo';
import AccountMenu from '../AccountMenu';
import { ComponentContext } from "../../mainlayout/Context";

export default () => {
    const { onToggleSidebar } = useContext(ComponentContext);

    return (
        <div className="shadow-lg fixed top-0 left-0 right-0 w-full bg-white py-1 px-6">
            <div className="flex flex-row items-center">
                <div className="basis-1/2 overflow-hidden">
                    <div className="flex w-64 gap-2">
                        <button type="button" onClick={onToggleSidebar}><HamburgerMenuIcon /></button>
                        <Logo />
                    </div>
                </div>
                <div className="basis-1/2">
                    <div className="float-right">
                        <AccountMenu />
                    </div>
                </div>
            </div>
        </div>
    );
}