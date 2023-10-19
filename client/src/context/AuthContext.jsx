import { createContext, useContext, useState } from "react"
import { registerRequest } from "../api/auth"

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user1, setUser] = useState(null)

    const[isAuthenticated, setIsAuthenticated] =  useState(false);
    
    const signup = async (user1) => {
        try{
        const res = await registerRequest(user1);
        console.log(res.data);
        setUser(res.data);
        setIsAuthenticated(true)}
        catch(error){
            console.log(error.response.data)
        }
    }

    return (
        <AuthContext.Provider value={{ signup, user1 }}>
            {children}
        </AuthContext.Provider>
    )
}