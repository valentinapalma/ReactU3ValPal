import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ModuleStyling.module.css';

/*
En component som är UI för ett "card" för innehåll.
Det går att toggla show/hide info med en knapp
*/
class CardComponent extends Component {
    static propTypes = {
        loginInfo: PropTypes.string,
        showContent: PropTypes.bool
    }

    constructor() {
        super()
        this.state = {
            showContent: true
        }
    }

    //Skapar toggle funktion som sedan användas i render för att visa/dölja innehåll
    showContent = () => {
        this.setState({
            showContent : !this.state.showContent
        });
    }

    render() {
        return (
            <div className={styles.card}>
                <div>
                    {this.props.children}
                    {!this.state.showContent && <h5>{this.props.loginInfo}</h5>}
                </div>

                {this.props.loginInfo && 
                    <div>
                        {!this.state.showContent 
                        ? 
                        <button onClick={this.showContent} className={styles.button}>Hide info</button> 
                        : 
                        <button onClick={this.showContent} className={styles.button}>Show info</button>}
                    </div>
                }
            </div>
        )
    }
}

export default CardComponent;