import React, { createContext, SetStateAction } from "react";


export interface ThemeContextProps{
    darkMode: boolean
    setDarkMode: React.Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext<null | ThemeContextProps>(null)


