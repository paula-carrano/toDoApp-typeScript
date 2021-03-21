import React, { FC, createContext, useState, useEffect, Dispatch, SetStateAction } from 'react'
import user from 'firebase'
import { firebaseAuth } from '../../utils';


type ContextType = {
    isAuthenticated?: boolean,
    setIsAuthenticated?: Dispatch<SetStateAction<boolean>>,
    user?: user.User | null,
    setUser?: (user: user.User | null) => void
}

const AuthContext = createContext<ContextType>({})

const AuthProvider: FC = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<user.User | null>(null)

    useEffect(() => {
        firebaseAuth.auth().onAuthStateChanged((userFirebase: user.User | null) => {
            const token = localStorage.getItem('userToken');
            console.log(token)
            if (token && token === userFirebase!.refreshToken) {
                setIsAuthenticated(true)
                setUser(userFirebase)
            }
        })
    }, [setIsAuthenticated, setUser]);

    return (
        //provee datos - comparte el estado con la app
        //value siempre recibe un objeto como dato, generalmente es un useState
        < AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }
        }>
            { children}
        </AuthContext.Provider >
    )
}

export { AuthProvider, AuthContext }