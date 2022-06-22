import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "../App";
import UseFetchPage from "../pages/useFetch";
import UseTablePage from "../pages/useTable";

const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/usetable" element={<UseTablePage />} />
                <Route path="/usefetch" element={<UseFetchPage />} />
            </Routes>
        </Router>
    );
};

export default RouterComponent;
