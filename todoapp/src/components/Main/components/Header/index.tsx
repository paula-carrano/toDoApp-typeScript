import React, { FC } from 'react';
import "./style.css"

interface Props {
    title?: string
    showAddButton?: boolean
    handleClick?: () => void
}

const Header: FC<Props> = ({ title, showAddButton = false, handleClick }) => {


    return (
        <header className='main-header'>
            <h1>{title}</h1>
            {!showAddButton && <button className='btn btn-primary btn1' onClick={handleClick}>Agregar</button>}
        </header>
    )
}

export { Header }
