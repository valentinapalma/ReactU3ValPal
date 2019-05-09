import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import DashboardScreen from '../screens/DashboardScreen';
import UserScreen from '../screens/UserScreen';
import LoginScreen from '../screens/LoginScreen';
import styles from './ModuleStyling.module.css';

/*
En component som innehåller navbar med länkar till 
Dashboard, Login och User
*/
class NavBarComponent extends Component {
    render() {
        return (
            <Router>
                <div className={styles.navbar}>
                    <ul className={styles.navList}>
                        <NavLink className={styles.links} activeClassName={styles.active} to="/login">Login</NavLink>
                        <NavLink className={styles.links} activeClassName={styles.active} to="/dashboard">Dashboard</NavLink>
                        <NavLink className={styles.links} activeClassName={styles.active} to="/user">User</NavLink>
                    </ul>
                </div>

                <Route exact path="/" component={LoginScreen} />
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/dashboard" component={DashboardScreen} />
                <Route exact path="/user" component={UserScreen} />
                <Route exact path="/user/:id" component={UserScreen} />
            </Router>
        )
    }
}

export default NavBarComponent;