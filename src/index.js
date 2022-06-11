import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';


// new version for React18
// Fix for ReactDOM.render is no longer supported
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);