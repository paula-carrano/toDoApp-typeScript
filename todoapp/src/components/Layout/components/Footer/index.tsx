import React, { FC } from 'react'
import { Github, Linkedin } from 'react-bootstrap-icons'

const Footer: FC = () => {
    return (
        <footer className='footer footer-alt text-center mb-5 mt-5'>
            <div className="row">
                <div className="col">
                    2021 © Paula Carrano project
                </div>
                <div className="col">
                    <a href="https://github.com/paula-carrano" target="_blank" className="mx-2 text-reset"><Github /></a>
                    <a href="https://www.linkedin.com/in/paula-carrano-1b8aa758/" target="_blank"><Linkedin /></a>
                </div>
            </div>

        </footer>
    )
}

export { Footer }