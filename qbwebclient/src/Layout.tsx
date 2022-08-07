import React from 'react';
import { Outlet } from "react-router-dom"; 
import Appmenu from './Appmenu';


interface MenuModel {
    data: {
        isAuthenticated: boolean;
        isAdmin: boolean
    }
    handleMenuLogout: () => void
}
 
function Layout(props: MenuModel) {
    return (
        <>
            <Appmenu data={props.data} handleMenuLogout={props.handleMenuLogout} />
            <Outlet />
            <br />
        </>
    );
}

export default Layout;


