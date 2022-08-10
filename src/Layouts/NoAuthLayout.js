import React from 'react';
import NavBar from './Navbar';

const NoAuthLayout = ({ children }) => {
    return (
        <React.Fragment>
            <NavBar />
            <div>
                {children}
            </div>
        </React.Fragment>
    );
};

export default NoAuthLayout;