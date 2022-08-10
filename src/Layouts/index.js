import React from 'react';

const Layout = ({ children }) => {

    return (
        <React.Fragment>
            <div>
                {children}
            </div>
        </React.Fragment>
    );
};

export default React.memo(Layout);