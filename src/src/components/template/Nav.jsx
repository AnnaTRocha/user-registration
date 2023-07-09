import './Nav.css'
import React from 'react'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            {/* refatorar - criar componente menu */}
            <a href="#/">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/user">
                <i className="fa fa-users"></i> Usuário
            </a>
        </nav>
    </aside>
