import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
// import MyNavBar from './components/MyNavBar';
// import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import About from './components/pages/About';
import Projects from './components/pages/Projects/projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Wrapper />
                <Switch>
                    <Route exact path={["/", "/about"]}>
                        <About />
                    </Route>
                    <Route exact path={["/projects"]}>
                        <Projects />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
