import React, { useContext } from 'react';
import { Public, Private } from '..'
import { AuthContext } from '../../contexts/AuthProvider';


const AuthRoute = () => {

    //para acceder a los datos. En el useContext le paso que contexto voy a usar
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <div>
            { isAuthenticated ? <Private /> : <Public />
            }
        </div>
    );
}

export { AuthRoute };
