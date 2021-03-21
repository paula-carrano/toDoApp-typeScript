import React, { useState, FC } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Main } from '../../../../components'
import './add.css'
import { api } from '../../../../utils'


const AddTaskForm: FC = () => {
    let history = useHistory();

    const [tareas, setTareas] = useState({
        titulo: '',
        fecha: '',
        descripcion: '',
        asignada: '',
    })

    const [error, setError] = useState<string | null>();

    const handleInputChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.currentTarget
        setTareas({
            ...tareas,
            [name]: value
        })
    }

    const redirectToList = () => {
        history.push("/tasks/list")
    }

    const enviarDatos = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        //console.log('enviando datos...' + tareas.titulo + ' ' + tareas.fecha)
        //console.log(tareas.descripcion);
        if (!tareas.titulo.trim() || !tareas.fecha.trim() || !tareas.descripcion.trim() || !tareas.asignada.trim()) {
            setError("Revise los campos")
            return
        }

        api.post('/tasks.json', {
            titulo: tareas.titulo,
            fecha: tareas.fecha,
            descripcion: tareas.descripcion,
            asignada: tareas.asignada,
            estado: 'pendiente',
        })
            .then(redirectToList)
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Layout >
            <Main title="Agregar Tarea" showAddButton>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <form className='form-agregar-tarea mt-5' onSubmit={enviarDatos}>
                                <div className="form-group ">
                                    <label htmlFor="titulo"><b>Título</b></label>
                                    <input type="text" name="titulo" className="form-control" id="titulo" placeholder="Título" onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fecha"><b>Fecha</b></label>
                                    <input type="date" name="fecha" className="form-control" id="fecha" placeholder="Seleccione una fecha" onChange={handleInputChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="textarea"><b>Descripción</b></label>
                                    <textarea className="form-control" name='descripcion' id="textarea" onChange={handleInputChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="asignada"><b>Asignada a:</b></label>
                                    <select className="form-control" id="asignada" name='asignada' onChange={handleInputChange}>
                                        <option value='Juan Altamirano' >Juan Altamirano</option>
                                        <option value='Natalia Suarez'>Natalia Suarez</option>
                                        <option value='Gala Lantier'>Gala Lantier</option>
                                        <option value='Nicolas Weber'>Nicolas Weber</option>
                                        <option value='Mariana Cadifi'>Mariana Cadifi</option>
                                    </select>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button className='btn btn-primary btn-agregar-tarea mt-5 btn-agregar-tarea' type='submit'>Agregar</button>
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

export { AddTaskForm }