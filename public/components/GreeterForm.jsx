var React = require('react');

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

module.exports = GreeterForm;
