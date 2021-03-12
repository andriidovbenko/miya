import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container, Row } from 'react-bootstrap'
import './App.scss'

import Store from './components/alternative/Alternative';
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
                  <Route path="/">
                    <Store />
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

function Home() {
  return <h2>For Home</h2>;
}

function Original() {
  return <h2>Original</h2>;
}


export default App;
