import React from "react";
import { Form } from "./Form";
import { Information } from "./Info_component";

class BodyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.onSubmitted = this.onSubmitted.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.deleteInformation = this.deleteInformation.bind(this);

		this.state = {
			isEditing: false,
			info: [],
		};
	}
	handleClick() {
		this.setState((prevState) => ({
			isEditing: !prevState.isEditing,
		}));
	}
	onSubmitted(obj) {
		this.setState((prevState) => ({
			isEditing: !prevState.isEditing,
			info: this.state.info.concat(obj),
		}));
	}
	onCancel() {
		this.setState((prevState) => ({
			isEditing: !prevState.isEditing,
		}));
	}
	deleteInformation(obj) {
		this.setState(() => ({
			info: this.state.info.filter((object) => object !== obj),
		}));
	}
	render() {
		let { isEditing, info } = this.state;
		let isPreview = this.props.isPreview;
		let form;
		let body;
		if (isEditing) {
			form = (
				<Form
					id={this.props.place.toLowerCase()}
					place={this.props.place}
					title={this.props.title}
					onSubmitted={this.onSubmitted}
					onCancel={this.onCancel}
				/>
			);
		} else {
			form = (
				<button onClick={this.handleClick}>
					Add {this.props.name}
				</button>
			);
		}
		if (!isPreview) {
			body = (
				<div className="body-info-full">
					<h2>{this.props.name}</h2>
					<Information
						info={info}
						place={this.props.place}
						title={this.props.title}
						isPreview={isPreview}
						deleteClick={this.deleteInformation}
					/>
					{form}
				</div>
			);
		} else {
			body = (
				<div className="body-info-full">
					<h2>{this.props.name}</h2>
					<Information
						info={info}
						place={this.props.place}
						title={this.props.title}
						isPreview={isPreview}
						deleteClick={this.deleteInformation}
					/>
				</div>
			);
		}
		return <div className="body-info">{body}</div>;
	}
}
export { BodyComponent };
