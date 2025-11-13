import { useContext } from "react";
import { UserLoggedContext, UserLoggedProps } from "../context/UserLoggedContext";


export default function useUserLoggedContext() {
    const context: UserLoggedProps | null = useContext(UserLoggedContext)
    if(!context) throw new Error("Contexto não fornecido")
    return context
}