import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import logo from "../../logo.svg";

function Header({title}) {
    return (
        <>
            <header className="app-header">
                <Link to="/"><img src={logo} className="App-logo" alt="rotating planet logo"/></Link>
                <h1>{title}</h1>
            </header>
        </>
    );
}

export default Header;
