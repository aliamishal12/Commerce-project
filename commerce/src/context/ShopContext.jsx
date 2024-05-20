import React, { createContext, useState } from 'react';
 
export const ShopContext = createContext(null);

const ShopContext = (props) => {
    const [state, setState] = useState({});

    const contextValue = {
        state,
        setState,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContext;
