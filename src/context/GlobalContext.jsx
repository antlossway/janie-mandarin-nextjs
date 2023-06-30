"use client"

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

// custom hook
export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider = ({children}) => {
    const [activePage, setActivePage] = useState('')

    return (
        <GlobalContext.Provider
            value={ {activePage, setActivePage}} >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
