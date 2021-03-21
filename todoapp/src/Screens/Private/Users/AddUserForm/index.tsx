import React, { useState, FC } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Main } from '../../../../components'
import { api } from '../../../../utils'

const AddUserForm: FC = () => {
    let history = useHistory();


    const [user, setUser] = useState({
        id: '',
        nombre: '',
        apellido: '',
        email: '',
        password: '',
    })

    const [error, setError] = useState<string | null>();

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget
        setUser({
            ...user,
            [name]: value
        })
    }

    const redirectToTable = () => {
        history.push("/users/list")
    }

    const enviarDatos = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!user.nombre.trim() || !user.apellido.trim() || !user.email.trim() || !user.password.trim()) {
            setError("Revise los campos")
            return
        }

        api.post('/users.json', {
            id: user.id,
            nombre: user.nombre,
            apellido: user.apellido,
            email: user.email,
            password: user.password,
        })
            .then(redirectToTable)
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Layout >
            <Main title="Agregar usuario " showAddButton>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <form className='form-agregar-tarea mt-5 mt-5 p-4 shadow' onSubmit={enviarDatos}>
                                <div className="form-group ">
                                    <label htmlFor="nombre"><b>Nombre</b></label>
                                    <input type="text" name="nombre" className="form-control" id="nombre" placeholder="Ingrese su nombre" onChange={(event) => handleInputChange(event)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="apellido"><b>Apellido</b></label>
                                    <input type="text" name="apellido" className="form-control" id="apellido" placeholder="Ingrese su apellido" onChange={(event) => handleInputChange(event)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><b>Email</b></label>
                                    <input type="email" name="email" className="form-control" id="email" placeholder="Ingrese su email" onChange={(event) => handleInputChange(event)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"><b>Contraseña</b></label>
                                    <input type="password" name="password" className="form-control" id="password" placeholder="Ingrese su contraseña" onChange={(event) => handleInputChange(event)} />
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button className='btn btn-primary btn-agregar-tarea mt-5 btn-agregar-tarea mt-3' type='submit'>Agregar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {
                    error != null ? (
                        <div className="alert alert-danger mt-2" role="alert">{error} </div>
                    ) : (<div></div>)
                }
            </Main>
        </Layout>

    )
}

export { AddUserForm }