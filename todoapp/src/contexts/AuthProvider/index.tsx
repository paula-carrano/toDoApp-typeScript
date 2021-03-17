import React, { FC, useState, createContext, useEffect, Dispatch, SetStateAction } from 'react'

type ContextType = {
    isAuthenticated?: boolean,
    setIsAuthenticated?: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<ContextType>({})

const AuthProvider: FC = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        firebaseAuth.auth().onAuthStateChanged((user) => {
            const token = localStorage.getItem('userToken');
            // console.log(token)
            if (token && token === user.refreshToken) {
                setIsAuthenticated(true)
                setUser(user)
            }
        })
    }, [setIsAuthenticated, setUser]);


    return (
        //provee datos - comparte el estado con la app
        // value siempre recibe un objeto como dato, generalmente es un useState
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthProvider, AuthContext }