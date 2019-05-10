import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../components/ModuleStyling.module.css';
import CardComponent from '../components/CardComponent';

/*
En vy som renderar/visar användaren man klickat på från listan
*/
class UserScreen extends Component {
	static propTypes = {
		match: PropTypes.object,
	}

	constructor(props) {
		super(props);
		this.state = {
			userInfo: [],
			showAdress: false
		};
	}

	// Hämtar individuell användardata från softhouses API baserat på ID't som skickas med som parameter.
	// Informationen hamnar i 'userInfo' statet.
	componentDidMount() {
		const userID = this.props.match.params.id;

		if (userID) {
		fetch(`http://api.softhouse.rocks/users/${userID}`, {
			method: 'GET'
		})
		.then(res => res.json())
		.then(data => {
			this.setState({
				userInfo: data
			})
		})
		.catch(error => console.log(error))	
		}
	}

	//Toggle funktion som sedan används för att visa/gömma adressinfo.
	toggleAdress = () => {
		this.setState({
			showAdress: !this.state.showAdress
		})
	}

	render() {
		const userId = this.props.match.params.id
		return (
			<div className={styles.dashboard}>
				{userId ? 
				<CardComponent>
					<div style={{textAlign:'center'}}>
						<img src="https://i.pinimg.com/originals/ac/15/7c/ac157c4ec950651bca305ac2d7dabce1.gif" alt="kitten"/>

						<h2 style={{textTransform:'uppercase', margin: '10px'}}>{this.state.userInfo.username}</h2>
						<p style={{color: '#b3b3b3', margin: '5px'}}>{this.state.userInfo.name}</p>
						<p style={{margin: '5px'}}> {this.state.userInfo.email}</p><br/>
						{this.state.showAdress 
						?
						<div style={{marginBottom: '30px'}}>
							<h3 style={{textTransform:'uppercase', margin:'5px'}}>Address:</h3>
							<p style={{margin: '5px'}}>{this.state.userInfo.address.city}</p>
							<p style={{margin: '5px'}}>{this.state.userInfo.address.street}</p>
							<p style={{margin: '5px'}}>{this.state.userInfo.address.suite}</p>
						</div>
						: 
						null}
						{this.state.showAdress
						?
						<button className={styles.button} onClick={this.toggleAdress}>Hide address</button>
						:
						<button className={styles.button} onClick={this.toggleAdress}>Show address</button>
						}
					</div>
				</CardComponent> 
				: 
				<h1>No selected user. <br/>Please select a user from dashboard.</h1>}
			</div>
		)	
	}
}

export default UserScreen;