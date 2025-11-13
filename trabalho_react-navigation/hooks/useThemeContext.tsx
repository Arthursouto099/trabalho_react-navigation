import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../context/ThemeContext";


export default function useThemeContext() {
    const context: ThemeContextProps | null = useContext(ThemeContext)
    if(!context) throw new Error("Contexto não fornecido")
    return context
}