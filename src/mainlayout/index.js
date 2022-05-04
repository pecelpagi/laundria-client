import React from "react";
import AppContext from './Context'
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

const MainLayout = ({ children }) => (
    <AppContext>
        <div className="relative left-0 sm:left-60 top-24">
            {children}
        </div>
        <SideMenu />
        <Header />
    </AppContext>
);

export default MainLayout;
