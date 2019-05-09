import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './ModuleStyling.module.css';

/*
Class component som tar emot två props, användare & färg.
Renderar en lista med användare
*/
class UserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }

    //Toggle funktion som varierar mellan två olika text färger
    toggleColor = (e) => {
        this.setState({
            active: !this.state.active 
        })
    };

    render() {
        let users = this.props.users;
        return (
            <div>
                <ul>
                    {users.map((user, i) => {
                        return <Link to={`/user/${user.id}`}
                        key={i}
                        className={this.state.active 
                        ? 
                        'active' 
                        : 
                        'not-active'
                        }>
                        <li key={i}>
                            {user.name}
                        </li>
                        </Link> 
                    })}
                </ul>
                <button onClick={this.toggleColor} className={styles.toggleButton}>Toggle</button>
            </div>
        )
    }
}

export default UserComponent;