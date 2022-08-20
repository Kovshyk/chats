import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './app.css'
import {useEffect} from "react";

function App() {

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
