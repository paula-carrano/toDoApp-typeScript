import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Main } from '../../../../components'
import './tasks.css'
import { tasksApi } from './api'
import { Card } from '../Card'


const List = () => {

    // FUNCION PARA REDIRECCIONAR EL BTN DE AGREGAR 
    const { push } = useHistory();


    const [pendiente, setPendiente] = useState([])
    const [realizada, setRealizada] = useState([])
    const [cancelada, setCancelada] = useState([])

    const fetchTasks = () => {
        tasksApi.get().then((response => {
            setPendiente(response.filter(t => t.estado === 'pendiente'))
            setRealizada(response.filter(t => t.estado === 'realizada'))
            setCancelada(response.filter(t => t.estado === 'cancelada'))
        }))
    }

    useEffect(() => {
        fetchTasks()
    }, []);


    return (
        <Layout>
            <Main title="Tareas" handleClick={() => push("/tasks/add")}>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-4 col-pendiente'>
                            <div className='board'>
                                <div className="tasks">
                                    <a className="fs-5 text-decoration-none text-dark" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">PENDIENTES ({pendiente.length})</a>
                                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                                        <div id="task-list-one" className="task-list-items">
                                            {pendiente.map(({ asignada, descripcion, fecha, id, titulo, estado }) => (
                                                <Card
                                                    asignada={asignada}
                                                    descripcion={descripcion}
                                                    fecha={fecha}
                                                    id={id}
                                                    key={id}
                                                    titulo={titulo}
                                                    estado={estado}
                                                    onTaskStatusChange={fetchTasks}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 col-realizada'>
                            <div className='board'>
                                <div className="tasks">
                                    <a className="fs-5 text-decoration-none text-dark" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">REALIZADAS ({realizada.length})</a>
                                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                                        <div id="task-list-two" className="task-list-items">
                                            {realizada.map(({ asignada, descripcion, fecha, id, titulo, estado }) => (
                                                <Card
                                                    asignada={asignada}
                                                    descripcion={descripcion}
                                                    fecha={fecha}
                                                    id={id}
                                                    key={id}
                                                    titulo={titulo}
                                                    estado={estado}
                                                    onTaskStatusChange={fetchTasks} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 col-cancelada'>
                            <div className='board'>
                                <div className="tasks">
                                    <a className="fs-5 text-decoration-none text-dark" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">CANCELADAS ({cancelada.length})</a>
                                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                                        <div id="task-list-three" className="task-list-items">
                                            {cancelada.map(({ asignada, descripcion, fecha, id, titulo, estado }) => (
                                                <Card
                                                    asignada={asignada}
                                                    descripcion={descripcion}
                                                    fecha={fecha}
                                                    id={id}
                                                    key={id}
                                                    titulo={titulo}
                                                    estado={estado}
                                                    onTaskStatusChange={fetchTasks} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </Layout>
    )
}

export { List };