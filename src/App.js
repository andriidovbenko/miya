import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container, Row } from 'react-bootstrap'
import './App.scss'

import Alternative from './pages/alternative/Alternative';
import Home from './pages/home/Home';
import Original from './pages/original/Original'
import Basket from './pages/basket/Basket'
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="miya-main-layout">
        <Container fluid>
          <Row>
            <Navigation />
          </Row>
        </Container>
        <div className="main">
          <Container>
              <Row>
                <Switch>
                  <Route path="/for-home">
                    <Home />
                  </Route>
                  <Route path="/original">
                    <Original />
                  </Route>
                  <Route path="/basket">
                    <Basket />
                  </Route>
                  <Route path="/">
                    <Alternative />
                  </Route>
                </Switch>
              </Row>
          </Container>
        </div>
        <Container fluid>
          <Row>
              <Footer />
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
