import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
// import MyNavBar from './components/MyNavBar';
// import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer/footer';
import PushDiv from './/components/Footer/pushDiv';
import About from './components/pages/About';
import Projects from './components/pages/Projects/projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Wrapper />
                <div className='container'>
                    <Switch>
                    <Route exact path={["/", "/about"]}>
                        <About />
                    </Route>
                    <Route exact path={["/projects"]}>
                        <Projects />
                    </Route>
                    </Switch>
                </div>
                <PushDiv/>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
