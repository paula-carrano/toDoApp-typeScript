import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom';
import { Layout, Main } from '../../../../components'
import { api } from '../../../../utils'

const UpdateUserForm = () => {

    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        email: '',
    })

    const history = useHistory();

    //DESTRUCTURACION DE DATOS
    let { id } = useParams();
    const { apellido, email, nombre } = user

    //CAPTURO LOS DATOS DE LOS INPUT

    const handleInputChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    //OBTENGO LOS DATOS DE ESTE USUARIO
    const getDataUser = () => {
        api.get(`/users/${id}.json`)
            .then((response => {
                const { apellido, email, nombre } = response.data;
                setUser({
                    apellido: apellido,
                    email: email,
                    nombre: nombre,
                })
            }))
    }

    useEffect(() => {
        getDataUser()
    }, []);

    //EDITO LOS DATOS DEL USUARIO
    const updateUser = async (e) => {
        e.preventDefault()
        const userUpdate = {
            apellido: apellido,
            email: email,
            nombre: nombre,
        }
        await api.patch(`/users/${id}.json`, userUpdate)
        history.push("/users/list");
    }

    return (
        <Layout >
            <Main title="Editar usuario" showAddButton>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <form className='form-agregar-tarea mt-5 p-4 shadow' onSubmit={updateUser}>
                                <div className="form-group ">
                                    <label htmlFor="nombre"><b>Nombre</b></label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        className="form-control"
                                        id="nombre"
                                        placeholder="Ingrese su nombre"
                                        value={nombre}
                                        onChange={(event) => handleInputChange(event)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="apellido"><b>Apellido</b></label>
                                    <input
                                        type="text"
                                        name="apellido"
                                        className="form-control"
                                        id="apellido"
                                        placeholder="Ingrese su apellido"
                                        value={apellido}
                                        onChange={(event) => handleInputChange(event)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><b>Email</b></label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Ingrese su email"
                                        value={email}
                                        onChange={(event) => handleInputChange(event)} />
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-md-12 d-inline-flex'>
                                        <Link to='/users/list' className='btn btn-secondary me-3' >Volver</Link>
                                        <button className='btn btn-primary btn-agregar-tarea btn-agregar-tarea' type='submit'>Confirmar</button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </Main>
        </Layout>

    )
}

export { UpdateUserForm }