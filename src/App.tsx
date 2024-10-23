import React from 'react';
import {HashRouter} from "react-router-dom";
import RootNavigation from "./routing/RootNavigation";
import {useTranslation} from "react-i18next";

export const App = () => {

    const { t } = useTranslation();

    const exampleApiUrl = process.env.REACT_APP_API_URL;
    console.log(`API URL: ${exampleApiUrl}`);

    return (
        <HashRouter>
            <h1>{t("hello")}</h1>
            <RootNavigation />
        </HashRouter>
    );
}

export default App;
