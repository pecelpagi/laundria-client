import { useContext } from 'react';
import ContentLoader from 'react-content-loader'
import { DotsVerticalIcon, DotFilledIcon } from '@radix-ui/react-icons';
import CustomAvatar from "../CustomAvatar";
import { ComponentContext } from "../../mainlayout/Context";
import React from 'react';

const MyLoader = () => (
    <ContentLoader
        speed={2}
        width={96}
        height={38}
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed"
    >
        <rect y="0" width="96" height="14" />
        <rect y="23" width="50" height="12" />
    </ContentLoader>
)

const MenuButton = ({ onClick }) => {
    const { loggedInProfile } = useContext(ComponentContext);

    return (
        <div className="inline-block">
            <div className="flex flex-row items-center">
                <div className="basis-1/4">
                    <CustomAvatar />
                </div>
                <div className="basis-2/4 pl-2 hidden sm:block">
                    {loggedInProfile && (
                        <React.Fragment>
                            <h5 className="mx-0 font-semibold text-sm whitespace-nowrap text-ellipsis overflow-hidden w-24">{loggedInProfile ? loggedInProfile.fullname : ''}</h5>
                            <span className="text-xs subpixel-antialiased tracking-wide flex items-center"><DotFilledIcon className="text-lime-700" height={18} width={18} />Online</span>
                        </React.Fragment>
                    )}
                    {!loggedInProfile && (
                        <MyLoader />
                    )}
                </div>
                <div className="basis-1/4">
                    <button type="button" id="dot-menu-button" className="pl-3 pr-0 py-2 sm:px-4" {...{ onClick }}><DotsVerticalIcon id="dot-menu-icon" /></button>
                </div>
            </div>
        </div>
    )
};

export default MenuButton;