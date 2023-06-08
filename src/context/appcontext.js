import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";
import { STARTUPS } from "./action";


const initialState = {
    isLoading: false,
    response: "",
}

const AppContext = React.createContext();
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const authFetch = axios.create({
        baseURL: "https://testapi.vasantsoftwaressolution.com/weatherforecast",
      });
    
      const startMayApp = async () => {
        try {
            
            const response =  await authFetch.get();
            console.log(response.data)
            dispatch({
                type: STARTUPS,
                payload: response.data
            })

        } catch (error) {
            console.log(error);
        }
      }

    return (
        <AppContext.Provider
        value={{...state, startMayApp}}
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
