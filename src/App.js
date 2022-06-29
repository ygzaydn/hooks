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
            <span onClick={() => navigate("/usewindow")} className="hook">
                useWindow
            </span>
            <span onClick={() => navigate("/usegeolocation")} className="hook">
                useGeoLocation
            </span>
            <span onClick={() => navigate("/useurlparser")} className="hook">
                useURLParser
            </span>
        </div>
    );
}

export default App;
