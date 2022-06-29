import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "../App";
import UseFetchPage from "../pages/useFetch";
import UseTablePage from "../pages/useTable";
import UseWindowPage from "../pages/useWindow";
import UseGeoLocationPage from "../pages/useGeoLocation";
import UseURLParserPage from "../pages/useURLParser";

const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/usetable" element={<UseTablePage />} />
                <Route path="/usefetch" element={<UseFetchPage />} />
                <Route path="/usewindow" element={<UseWindowPage />} />
                <Route
                    path="/usegeolocation"
                    element={<UseGeoLocationPage />}
                />
                <Route path="/useurlparser" element={<UseURLParserPage />} />
            </Routes>
        </Router>
    );
};

export default RouterComponent;
