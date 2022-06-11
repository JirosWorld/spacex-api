import logo from './logo.svg';
import './App.css';
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import CrewTotalInfo from "./components/CrewTotalInfo/CrewTotalInfo";
import {Link} from "react-router-dom";

function App() {

    return (
        <div className="app">

            <header className="app-header">
                <img src={logo} className="App-logo" alt="rotating planet logo"/>
                <h1>SpaceX API</h1>
            </header>
            <main>
                <CompanyInfo />

                <div>
                    <p>➜ Click <Link to="/crew-search">for the Crew search Page</Link>!</p>
                </div>

                <CrewTotalInfo />

                <div>
                    <p>➜ Click <Link to="/crew-search">for the Crew search Page</Link>!</p>
                </div>
            </main>

        </div>
    );
}

export default App;
