import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

const PublicRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(state => {
        return !!state.user.userData;
    })
    return (
        <Route { ...rest } component={ (props) => (
            !isAuthenticated ? (
                <Component { ...props } />
            ) : (
                <Redirect to="/admin" />
            )
        ) } />
    );
}

export default PublicRoute;