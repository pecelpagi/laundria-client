import React, { useContext } from 'react';
import CustomAvatar from "../CustomAvatar";
import { ComponentContext } from "../../mainlayout/Context";
import Box from '../Box';
import * as MenuButtonComponent from './menu-button.components';

const MenuButton = ({ onClick }) => {
    const { loggedInProfile } = useContext(ComponentContext);

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