import logo from './logo.svg';
import './App.css';
import CompanyInfo from "./components/CompanyInfo";
import CrewTotalInfo from "./components/CrewTotalInfo";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="rotating planet logo"/>
                <h1>SpaceX API</h1>
            </header>
            <CompanyInfo/>

            <CrewTotalInfo/>
        </div>
    );
}

export default App;
