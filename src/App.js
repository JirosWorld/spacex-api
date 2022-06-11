import logo from './logo.svg';
import './App.css';
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import CrewTotalInfo from "./components/CrewTotalInfo/CrewTotalInfo";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="rotating planet logo"/>
                <h1>SpaceX API</h1>
            </header>
            <main>
                <CompanyInfo />

                <CrewTotalInfo />

                <div>
                    <p>Click here to go to the Crew search Page</p>
                </div>
            </main>

        </div>
    );
}

export default App;
