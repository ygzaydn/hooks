import "./App.css";

import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();
    return (
        <div className="App">
            <header className="App-header">
                <p>Hooks</p>
            </header>
            <span onClick={() => navigate("/usetable")} className="hook">
                useTable
            </span>
            <span onClick={() => navigate("/usefetch")} className="hook">
                useFetch
            </span>
        </div>
    );
}

export default App;
