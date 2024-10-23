import {Route, Routes} from "react-router-dom";

export const RootNavigation = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>React Quick Starter</h1>} />
            {/* Add your routes here */}
        </Routes>
    );
}

export default RootNavigation;