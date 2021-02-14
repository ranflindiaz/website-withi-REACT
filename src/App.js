import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import FPE from './components/pages/FPE';
import GifRetrieveApp from './components/pages/GifRetrieveApp';
import Crud from './components/pages/Crud';
import Contact from './components/pages/Contact';

import './App.css';


const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/projects" exact component={Projects}/>
                <Route path="/about" exact component={About}/>
                <Route path="/fpe" exact component={FPE}/>
                <Route path="/gifretrieveapp" exact component={GifRetrieveApp}/>
                <Route path="/crud" exact component={Crud}/>
                <Route path="/contact" exact component={Contact}/>
            </Switch>
        </Router>
    )
}
export default App;


