import React, { Component, PropTypes } from 'react';


class App extends Component{
	reder() {
		return(
			<div>
				<header>Ecommerce</header>
				{this.props.children}
				<footer>&copy; 2018</footer>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;