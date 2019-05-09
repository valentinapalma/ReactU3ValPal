import React, { Component } from 'react';
import DashboardComponent from '../components/DashboardComponent';


/*
En vy som visar/renderar Dashboard component med listan på användare och lägg till/ta bort funktion 
*/
class DashboardScreen extends Component {
	render() {
		return (
			<div>
                <DashboardComponent />
			</div>
		);
	}
}

export default DashboardScreen;