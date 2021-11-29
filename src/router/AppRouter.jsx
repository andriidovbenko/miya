import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { Container, Row } from 'react-bootstrap'

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Admin from '../pages/admin/Admin';
import Alternative from '../pages/alternative/Alternative';
import Home from '../pages/home/Home';
import Original from '../pages/original/Original'
import Basket from '../pages/basket/Basket'
import Login from '../pages/login/Login'
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';

function AppRouter() {
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
                                <Route path="/for-home" component={ Home } />
                                <Route path="/original" component={ Original } />
                                <Route path="/basket" component={ Basket } />
                                <PrivateRoute path="/admin" component={ Admin } />
                                <PublicRoute path="/login" component={ Login } />
                                <Route path="/" component={ Alternative } />
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
  
  export default AppRouter;
