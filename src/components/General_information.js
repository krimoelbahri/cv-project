import React from "react";
class InfoArea extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			name: this.props.name,
			isEditing: false,
		};
	}
	handleClick() {
		this.setState({
			isEditing: true,
		});
	}
	handleChange(e) {
		this.setState({
			name: e.target.value,
		});
	}
	handleBlur(e) {
		if (!e.target.value) {
			this.setState({
				name: this.props.name,
				isEditing: false,
			});
		} else {
			this.setState({
				name: e.target.value,
				isEditing: false,
			});
		}
	}
	render() {
		const isEditing = this.state.isEditing;
		let isPreview = this.props.isPreview;
		let area;
		if (isEditing) {
			area = (
				<input
					onBlur={this.handleBlur}
					onChange={this.handleChange}
					type={this.props.type}
					value={this.state.name}
					placeholder={this.state.name}
					autoFocus
				/>
			);
		} else {
			area = <h1 onClick={this.handleClick}>{this.state.name}</h1>;
		}
		if (isPreview) {
			area = <h1>{this.state.name}</h1>;
		}
		return <div>{area}</div>;
	}
}

class GeneralInfo extends React.Component {
	render() {
		return (
			<div id="generalInfo">
				<div id="mainGInfo">
					<InfoArea
						name="Title"
						type="text"
						isPreview={this.props.isPreview}
					/>
					<InfoArea
						name="Full Name"
						type="text"
						isPreview={this.props.isPreview}
					/>
				</div>
				<div id="sideGInfo">
					<div className="flex-R">
						<i className="fas fa-address-book"></i>
						<InfoArea
							name="Address"
							type="text"
							isPreview={this.props.isPreview}
						/>
					</div>
					<div className="flex-R">
						<i className="fas fa-phone"></i>
						<InfoArea
							name="Phone Number"
							type="number"
							isPreview={this.props.isPreview}
						/>
					</div>
					<div className="flex-R">
						<i className="fas fa-envelope"></i>
						<InfoArea
							name="Email"
							type="email"
							isPreview={this.props.isPreview}
						/>
					</div>
					<div className="flex-R">
						<i className="fas fa-at"></i>
						<InfoArea
							name="Website"
							type="text"
							isPreview={this.props.isPreview}
						/>
					</div>
				</div>
			</div>
		);
	}
}
export { GeneralInfo };
