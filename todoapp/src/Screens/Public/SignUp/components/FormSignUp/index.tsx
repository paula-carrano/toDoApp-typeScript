import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../../../../../hooks'

const FormSignUp = () => {

    const [nombreCompleto, setNombreCompleto] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpass, setConfirmPass] = useState('')

    const { register } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        register(email, password, nombreCompleto, confirmpass)
        setNombreCompleto('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-5'>
                    <div className='card-signup mt-5 shadow'>
                        <div className='card-header pt-4 pb-4 text-center bg-dark'>
                        </div>
                        <div className='card-body p-4'>
                            <div className='text-center w-75 m-auto'>
                                <h4 className='text-dark-50 text-center mt-0 font-weight-bold'>Registro gratuito</h4>
                                <p className='text-muted mb-4'>No posee una cuenta? Cree su cuenta, le tomará menos de un minuto.</p>
                            </div>
                            <form action="#" onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <label htmlFor='fullname'>Nombre completo</label>
                                    <input
                                        onChange={(e) => setNombreCompleto(e.target.value)}
                                        className='form-control'
                                        type='text' id='nombreCompleto'
                                        required=''
                                        value={nombreCompleto}
                                        placeholder='Ingrese su nombre completo' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='emailaddress'>Correo electrónico</label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='form-control'
                                        type='email'
                                        id='emailaddress'
                                        required=''
                                        value={email}
                                        placeholder='Ingrese su correo electrónico' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>Contraseña</label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type='password'
                                        id='password'
                                        className='form-control'
                                        value={password}
                                        placeholder='Ingrese su contraseña' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='confirmpass'>Repita su contraseña</label>
                                    <input
                                        onChange={(e) => setConfirmPass(e.target.value)}
                                        type='password'
                                        id='confirmpass'
                                        className='form-control'
                                        value={confirmpass}
                                        placeholder='Repita su contraseña' />
                                </div>
                                {
                                    (password !== confirmpass) ? <div className="alert alert-danger p-2 m-2" role="alert">Verifique la contraseña</div> : <span></span>
                                }
                                <div className='form-group mb-3'>
                                    <div className='custom-control custom-checkbox'>
                                        <input
                                            type='checkbox'
                                            className='custom-control-input me-3'
                                            id='checkbox-signin' />
                                        <label className='custom-control-label' htmlFor='checkbox-signin'>Acepto términos y condiciones</label>
                                    </div>
                                </div>

                                <div className='form-group mb-0 text-center'>
                                    <button className='btn btn-primary' type='submit'>Registrarme</button>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12 text-center">
                                        <p className="text-muted">Ya tiene su cuenta? <Link to='/login' className='text-muted ml-1'><b>Ingresar</b></Link></p>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { FormSignUp };
