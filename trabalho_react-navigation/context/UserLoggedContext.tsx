import { createContext, Dispatch, SetStateAction } from "react"
import { User } from "../interfaces/NavigationTypes"

export interface UserLoggedProps {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
}


export const UserLoggedContext = createContext<UserLoggedProps | null >(null)