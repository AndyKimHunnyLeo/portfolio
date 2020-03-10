import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css"

function Navigation() {
    return (
        <div class="nav">

            <Link to="/" class="nav_text">home</Link>
            <Link to="/projects" class="nav_text" >projects</Link>
            <Link to="/contact" class="nav_text">contact</Link>
        </div >
    );
}


export default Navigation;