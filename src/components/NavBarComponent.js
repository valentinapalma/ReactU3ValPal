import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ModuleStyling.module.css';

/*
En component som innehåller navbar med länkar till 
Dashboard, Login och User
*/
class NavBarComponent extends Component {
    render() {
        return (
                <div className={styles.navbar}>
                    <ul className={styles.navList}>
                        <NavLink className={styles.links} activeClassName={styles.active} to="/login">Login</NavLink>
                        <NavLink className={styles.links} activeClassName={styles.active} to="/dashboard">Dashboard</NavLink>
                        <NavLink className={styles.links} activeClassName={styles.active} to="/user">User</NavLink>
                    </ul>
                </div>
        )
    }
}

export default NavBarComponent;