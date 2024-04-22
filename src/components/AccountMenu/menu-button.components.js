import React from 'react';
import ContentLoader from 'react-content-loader'
import { DotsVerticalIcon, DotFilledIcon } from '@radix-ui/react-icons';
import Box from '../Box';
import { useSelector } from 'react-redux';
import { selectMyProfileData } from '../../store/user/user.selector';

export const DisplayName = () => {
    const loggedInProfile = useSelector(selectMyProfileData);

    return (
        <Box
            css={{
                flexDirection: 'column',
                textAlign: 'left'
            }}
        >
            <h5 className="mx-0 font-semibold text-sm whitespace-nowrap">{loggedInProfile ? loggedInProfile.fullname : ''}</h5>
            <span className="text-sm flex items-center"><DotFilledIcon className="text-lime-700" height={18} width={18} />Online</span>
        </Box>
    )
}

export const SkeletonDisplayName = () => (
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

export const DotMenuButton = ({ onClick }) => {
    return (
        <button type="button" id="dot-menu-button" className="pl-3 pr-0 py-2 sm:px-4" {...{ onClick }}><DotsVerticalIcon id="dot-menu-icon" /></button>
    )
}