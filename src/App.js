import './App.css';
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import CrewTotalInfo from "./components/CrewTotalInfo/CrewTotalInfo";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import Header from "./components/header/Header";


function App() {

    useEffect(() => {
        document.title = "Jiro's SpaceX UI"
    }, []);

    return (
        <div className="app">

            <Header
                title="SpaceX API"/>

            <main>
                <CompanyInfo/>

                <div className="nav-link">
                    <p>➜ Click <Link to="/crew-search">for the Crew search Page</Link>!</p>
                </div>

                <CrewTotalInfo/>

                <div className="nav-link">
                    <p>➜ Click <Link to="/crew-search">for the Crew search Page</Link>!</p>
                </div>

            </main>

            <footer>
                <p>&copy; 2022 Jiro Ghianni</p>
            </footer>

        </div>
    );
}

export default App;
