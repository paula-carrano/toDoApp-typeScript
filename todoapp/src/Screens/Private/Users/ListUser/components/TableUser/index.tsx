import React, { FC } from 'react';
import { Link } from 'react-router-dom'
import { PencilFill, TrashFill } from 'react-bootstrap-icons'

type Props = {
    dataUser?: UserFirebase[],
    handleClickDelete?: (id: string) => void
}

type UserFirebase = {
    apellido: string,
    email: string,
    id: string,
    nombre: string,
    password: string
}

const TableUser = ({ dataUser, handleClickDelete }: Props) => {

    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr className="text-center">
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo electónico</th>
                        <th scope="col">Contraseña</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dataUser.map(({ id, nombre, apellido, email, password }, i) => {
                        return (
                            <tr key={id} className="text-center">
                                <td>{i + 1} </td>
                                <td>{nombre}</td>
                                <td>{apellido} </td>
                                <td>{email} </td>
                                <td>{password} </td>
                                <td><Link to={`/users/update/${id}`} className="btn btn-info" ><PencilFill /></Link></td>
                                <td><button className="btn btn-danger" onClick={handleClickDelete}><TrashFill /></button></td>
                            </tr>
                        )
                    }
                    )}

                </tbody>
            </table>
        </div>
    );
}

export { TableUser };
