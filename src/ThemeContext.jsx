// create -> provide -> use

import { createContext, useState } from "react";

export const themeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    return (
        <themeContext.Provider value={{theme, setTheme}}>
            {children}
        </themeContext.Provider>
    )
}