var GreeterMessage = React.createClass({
	render: function () {
		var name = this.props.name;
		var message = this.props.message;
		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{message}</p>
			</div>
		);
	}
});

var GreeterForm = React.createClass({
	onFormSubmit: function (evt) {
		evt.preventDefault();

		var update = {};
		var name = this.refs.name.value;
		var message = this.refs.message.value;

		if (typeof name == "string" && name.length > 0) {
			this.refs.name.value = '';
			update.name = name;
		}

		if (message.length > 0) {
			this.refs.message.value = '';
			update.message = message;
		}

		this.props.onNewData(update);
	},

	render: function () {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<input type="text" ref="name" placeholder="Enter name"/>
				</div>
				<div>
					<textarea ref="message" placeholder="Enter message"></textarea>
				</div>
				<div>
					<button>Show Name</button>
				</div>
			</form>
		);
	}
});

var Greeter = React.createClass({

	getDefaultProps: function () {
		return {
			name: "React",
			message: "This is default message."
		};
	},

	getInitialState: function () {
		return {
			name: this.props.name,
			message: this.props.message
		};
	},

	onNewData: function (update) {
		this.setState(update);
	},

	render: function () {

		var name = this.state.name;
		var message = this.state.message;

		return (
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewData={this.onNewData}/>
			</div>
		);

	}

});

var name = "Kuwar";
var message = "This is surname";

ReactDOM.render(
	<Greeter name={name} message={message}/>,
	document.getElementById('app')
)
