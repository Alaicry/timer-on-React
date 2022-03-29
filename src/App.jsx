import React from 'react';
import './App.css';

export default class App extends React.Component {
	state = {
		count: 0,
		isCounting: false,
	};

	componentDidMount() {
		const userCount = localStorage.getItem('timer');
		if (userCount) {
			this.setState({ count: +userCount });
		}
	}

	componentDidUpdate() {
		localStorage.setItem('timer', this.state.count);
	}

	componentWillUnmount() {
		clearInterval(this.counterIndex)
	}

	handleStart = () => {
		this.setState({ isCounting: true });
		this.counterIndex = setInterval(() => {
			this.setState({ count: this.state.count + 1 });
		}, 1000);
	};

	handleStop = () => {
		this.setState({ isCounting: false });
		clearInterval(this.counterIndex);
	};

	handleReset = () => {
		this.setState({ isCounting: false, count: 0 });
		clearInterval(this.counterIndex);
	};

	render() {
		return (
			<div className='App'>
				<h1>React Timer</h1>
				<h3>{this.state.count}</h3>
				{!this.state.isCounting ? (
					<button onClick={this.handleStart}>Start</button>
				) : (
					<button onClick={this.handleStop}>Stop</button>
				)}
				<button onClick={this.handleReset}>Reset</button>
			</div>
		);
	}
}
