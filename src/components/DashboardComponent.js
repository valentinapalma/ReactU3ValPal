import React, { Component } from 'react';
import styles from './ModuleStyling.module.css';
import UserComponent from './UserComponent';
import CardComponent from './CardComponent';

/*
Renderar alla components som ska renderas, har input, add & remove knapp och innehåller även nuvarande state.
Finns funktioner så som att lägga till, ta bort, toggla färg, 
*/
class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            color: '#fff',
            value: ['']
        }
    };

    //Här gör jag en fetch request från softhouse API, för att hämta data om användare som jag sedan sparar i mitt state 'users'.
    componentWillMount () {
        fetch('http://api.softhouse.rocks/users')
        .then(res => {
            return res.json()
        })
        .then(data => {
            this.setState({
            users: data
            });
        })
        .catch((err) => {
            this.setState({
                error: err
            })
        })
    }

    
    // Lägger till en användare från input genom att skapa en ny array med den nya användaren.
    addUser = (e) => {
        const newUser = this.state.users.concat(this.state.value);
        this.setState({
            users: newUser,
            value: ''
        })
    };

    // Tar bort användare genom att skapa en ny array där en användare har blivit raderad.
    // Raderar sista användaren i listan
    removeUser = (e) => {
        const removeUser = this.state.users.slice(0, this.state.users.length -1);
        this.setState({users: removeUser})
    };

    //Skriver ut det som skrivs i inputfältet och konverterar det till ett värde
    handleInput = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    render() {
        return (
            <div className={styles.dashboard}>
                <CardComponent>
                    <UserComponent users={this.state.users}/>
                </CardComponent>

                <CardComponent>
                    <input 
                        value={this.state.value}
                        type="text"
                        placeholder="Hello. Write to add here!"
                        onChange={this.handleInput}
                        className={styles.input}  />
                    <button 
                        onClick={this.addUser}
                        className={styles.add}>Add</button>
                    <button
                        onClick={this.removeUser}
                        className={styles.remove}>Remove</button>
                </CardComponent>
            </div>
                
        )
    }
}

export default DashboardComponent;