import { ReactNode, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"



export const ThemaProvider = ({children}: {children: ReactNode}) => {
    const [darkMode, setDarkMode] = useState<boolean>(true)



    return (
        <ThemeContext.Provider  value={{darkMode, setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}