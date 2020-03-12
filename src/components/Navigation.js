import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css"

function Navigation() {
    return (
        <div class="nav">

            <Link to="/" target="_top" class="nav_text home">home</Link>
            <Link to="/projects" target="_top" class="nav_text projects" >projects</Link>
            <Link to="/contact" target="_top" class="nav_text ">contact</Link>

        </div >
    );
}


export default Navigation;