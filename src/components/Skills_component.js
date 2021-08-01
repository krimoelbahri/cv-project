import React from "react";
import { SkillsForm } from "./Form";
import { SkillsInformation } from "./Info_component";

class SkillsComponent extends React.Component {
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
				<SkillsForm
					id={this.props.name.toLowerCase()}
					skill={this.props.name}
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
					<SkillsInformation
						info={info}
						deleteClick={this.deleteInformation}
						isPreview={isPreview}
					/>
					{form}
				</div>
			);
		} else {
			body = (
				<div className="body-info-full">
					<h2>{this.props.name}</h2>
					<SkillsInformation
						info={info}
						deleteClick={this.deleteInformation}
						isPreview={isPreview}
					/>
				</div>
			);
		}
		return <div className="body-info">{body}</div>;
	}
}
export { SkillsComponent };
