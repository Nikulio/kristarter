import React, { Component } from "react";
import { connect } from "react-redux";
import { initAction } from "../../actions/index";
import "./index.scss";

class App extends Component {
	componentWillMount() {
		const initActionData = {
			hello: "world"
		};
		this.props.initAction(initActionData);
	}

	state = {
		preview: "img/index.jpg"
	};

	render() {
		const { preview } = this.state;
		return (
			<div className="preview" style={{backgroundImage: `url(${preview})`}} />
		);
	}
}
const mapDispatchToProps = {
	initAction
};
const mapStateToProps = state => {
	return {
		init: state.init
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
