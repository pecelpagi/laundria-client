import React from 'react';

const MainLayoutContext = React.createContext({
    isShowingSidebarMenu: true,
    onShowingSidebarMenu: (isShowingSidebarMenu = true) => {},
});

export default MainLayoutContext;
