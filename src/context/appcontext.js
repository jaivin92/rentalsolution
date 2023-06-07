import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();


const initialState = {
    isLoading: false,
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider
        value={{...state}}
        >
                {children}

        </AppContext.Provider>
    );
};

//global hook


const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
