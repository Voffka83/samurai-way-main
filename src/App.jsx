import './App.css';
import React from 'react';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {Nav} from "./Components/Nav/Nav";
import {Dialogs} from "./Components/Dialogs/Dialogs";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            {/*<Profile/>*/}
            <Dialogs/>
        </div>
    );
}

export default App;



