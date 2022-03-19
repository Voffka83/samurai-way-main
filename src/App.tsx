import './App.css';
import React from 'react';
import {Header} from "./Components/Header";
import {Profile} from "./Components/Profile";
import {Nav} from "./Components/Nav";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}

export default App;



