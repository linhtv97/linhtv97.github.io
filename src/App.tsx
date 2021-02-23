import React from 'react';
import Application from "./pages/App/Application";
import ApplicationProvider from "./app/ApplicationProvider";

function App() {
    return (
        <ApplicationProvider>
            <Application/>
        </ApplicationProvider>
    )
}

export default App;
