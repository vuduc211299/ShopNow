import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { LOGIN_FAILED } from '../../actions/authActions'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            if (localStorage.getItem('token')) {
                return (
                    <Component {...props} />
                )
            } else {
                return (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: {
                                auth: LOGIN_FAILED
                            }
                        }}
                    />
                )
            }
        }}
    />
)