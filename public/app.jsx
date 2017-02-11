var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var name = "Kuwar";
var message = "This is surname";

ReactDOM.render(
	<Greeter name={name} message={message}/>,
	document.getElementById('app')
)
