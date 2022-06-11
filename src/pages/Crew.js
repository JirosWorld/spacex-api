import React from 'react';
import logo from "../logo.svg";
import { Link } from "react-router-dom";

function Crew() {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="App-logo" alt="rotating planet logo"/>
                <h1>SpaceX Crew Search</h1>
            </header>
            <main>

                <div>
                    <p>Start typing in the field in order to search for Crew members!</p>
                </div>

                <div>
                    <p>➜ To <Link to="/">the Home page</Link>!</p>
                </div>

            </main>

        </div>
    );
}

export default Crew;