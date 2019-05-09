import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../components/ModuleStyling.module.css';
import CardComponent from '../components/CardComponent';

/*
En vy som renderar/visar ett inloggningsformulär
*/
class LoginScreen extends Component {
	static propTypes = {
		value: PropTypes.array,
		history: PropTypes.object
	}

	constructor(props) {
		super(props)
		this.state = {
			value: [''],
		}
	}

	//Skriver ut det som skrivs i inputfältet och konverterar det till ett värde
	handleInput = (e) => {
        this.setState({
            value: e.target.value
        })
    };

	//Kontrollerar så att användaren skrivit minst tre tecken för att kunna logga in och bli navigerad till dashboard
	navigateDashboard = () => {
		if (this.state.value.length > 2) {
		 	return this.props.history.push('/dashboard')
		} return alert('You need 3 characters or more to login')
	};

	render() {
		return (
			<div className={styles.dashboard}>
                <CardComponent loginInfo='Please write your username (atleast 3 characters long) and login'>
					<input 
                        value={this.state.value}
                        type="text"
                        placeholder="Username"
                        onChange={this.handleInput}
                        className={styles.input}  />

					<button
						onClick={this.navigateDashboard}
						className={styles.login}>Login</button>
				</CardComponent>
			</div>
		);
	}
}

export default LoginScreen;