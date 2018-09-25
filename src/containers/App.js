import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {

	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
		console.log("constructor");
	}

	// state can change effect on app
	// props like function not can change

	componentDidMount() {

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({ robots: users })});

		console.log("componentDidMount");
	}

	// Kopiuja sie 'users' danne jako API

	onSearchChange = (event) => {
		// console.log(event); 
		// console.log(event.target.value);
		this.setState({ searchfield: event.target.value })
	}

	render() {

		const { robots, searchfield } = this.state;
		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		console.log(filterRobots);

		console.log("render");

		return !robots.length ? <h1>Loading</h1> : (
			<div className="tc bodier">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filterRobots} />
			</div>
		);

	}
}

export default App;