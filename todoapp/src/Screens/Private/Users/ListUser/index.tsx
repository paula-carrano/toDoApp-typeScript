import React, { useEffect, useState, FC } from 'react';
import { useHistory } from 'react-router-dom'
import { Layout, Main } from '../../../../components'
import { TableUser } from './components'
import { api } from '../../../../utils'
import { UserApi } from './api'

type UserFirebase = {
    apellido: string,
    email: string,
    id: string,
    nombre: string,
    password: string
}

const ListUser: FC = () => {

    //REDIRECCIONO EL BTN
    const { push } = useHistory();

    const [dataUser, setdataUser] = useState<UserFirebase[]>([])

    // OBTENGO DATOS
    const setUsers = () => {
        UserApi.get()
            .then((response => {
                setdataUser(response);
            }))
    }

    useEffect(() => {
        setUsers()
    }, []);

    //BTN DELETE

    const deleteUser = (id: string) => {
        api.delete(`/users/${id}.json`)
            .then(() => setUsers())
    }

    return (
        <Layout>
            <Main title="Usuarios" handleClick={() => push("/users/add")}>
                <div className="container">
                    <div className="row">
                        <TableUser dataUser={dataUser} handleClickDelete={deleteUser} />
                    </div>
                </div>
            </Main>
        </Layout>
    );
}

export { ListUser };
