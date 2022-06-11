import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Crew from "./pages/Crew";


// new version for React18
// Fix for ReactDOM.render is no longer supported
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<App/>}/>
                <Route path="crew-search" element={<Crew/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);