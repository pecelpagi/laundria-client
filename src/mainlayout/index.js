import React from "react";
import AppContext from './Context'
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

const MainLayout = () => (
    <AppContext>
        <SideMenu />
        <Header />
    </AppContext>
);

export default MainLayout;
