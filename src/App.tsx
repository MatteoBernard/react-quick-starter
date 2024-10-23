import React from 'react';
import {HashRouter} from "react-router-dom";
import RootNavigation from "./routing/RootNavigation";

export const App = () => {
    return (
        <HashRouter>
            <RootNavigation />
        </HashRouter>
    );
}

export default App;
