import { AuthContext } from "../contexts/AuthProvider"
import { useState, useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { firebaseAuth } from '../utils/firebase-config'


const useAuth = () => {


    const [authMsgError, setAuthMsgError] = useState(null)

    const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(AuthContext)

    const history = useHistory()


    const login = (email, password) => {
        firebaseAuth.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                setUser(user)
                setIsAuthenticated(true)
                localStorage.setItem('userToken', user.refreshToken)
                history.go(0)
            })
            .catch(e => {
                switch (e.code) {
                    case "auth/invalid-email": setAuthMsgError('Formato de email incorrecto')
                        break
                    case "auth/weak-password": setAuthMsgError('La contraseña debe tener 6 caracteres o más')
                        break
                    case "auth/wrong-password": setAuthMsgError('La contraseña es incorrecta o el usuario no está registrado')
                        break
                    default: setAuthMsgError("La web tiene un incoveniente, intente más tarde")
                }
            })
    }

    const register = (email, password, nombreCompleto) => {

        firebaseAuth.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                setUser(user);
                user.updateProfile({ displayName: nombreCompleto });
                user.updateProfile({ photoURL: "http://placeimg.com/100/100/people" });
                // history.push("/")
            })
            .catch(e => {
                switch (e.code) {
                    case "auth/invalid-email": setAuthMsgError('Formato de email incorrecto')
                        break
                    case "auth/weak-password": setAuthMsgError('La contraseña debe tener 6 caracteres o más')
                        break
                    default: setAuthMsgError("La web tiene un incoveniente, intente más tarde")

                }
            })
    }

    const logout = () => {
        firebaseAuth.auth().signOut()
            .then(() => {
                localStorage.removeItem('userToken')
                setIsAuthenticated(false)
                history.go(0)
            }).catch((error) => {
                console.error(error)
            });

    }

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

    return { login, register, logout, user, isAuthenticated, authMsgError }
}

export { useAuth }