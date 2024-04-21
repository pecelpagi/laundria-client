import React from 'react';
import CustomAvatar from "../CustomAvatar";
import Box from '../Box';
import * as MenuButtonComponent from './menu-button.components';
import { useSelector } from 'react-redux';
import { selectMyProfileData } from '../../store/user/user.selector';

const MenuButton = ({ onClick }) => {
    const loggedInProfile = useSelector(selectMyProfileData);

    return (
        <Box
            css={{
                alignItems: 'center',
                gap: 10,
                display: 'grid',
                gridTemplateColumns: 'auto auto auto'
            }}
        >
            <Box>
                <CustomAvatar />
            </Box>
            <Box>
                {loggedInProfile && <MenuButtonComponent.DisplayName />}
                {!loggedInProfile && <MenuButtonComponent.SkeletonDisplayName />}
            </Box>
            <Box>
                <MenuButtonComponent.DotMenuButton {...{ onClick }} />
            </Box>
        </Box>
    )
};

export default MenuButton;