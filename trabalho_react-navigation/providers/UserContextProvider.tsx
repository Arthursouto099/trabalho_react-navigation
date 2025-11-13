import { ReactNode, useState } from "react"
import { UserLoggedContext } from "../context/UserLoggedContext"
import { User } from "../interfaces/NavigationTypes"



export const UserLoggedProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User>({
        name: "Nathalia",
        email: "nathalia@gmail.com",
        city: "Esteio bucha"
    })



    return (
        <UserLoggedContext.Provider  value={{user, setUser}}>
            {children}
        </UserLoggedContext.Provider>
    )
}