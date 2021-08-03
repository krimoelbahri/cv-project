import React from "react";
import { InputComponent } from "./Input_component";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmitInfo = this.onSubmitInfo.bind(this);
		this.placeChange = this.placeChange.bind(this);
		this.titleChange = this.titleChange.bind(this);
		this.startDateChange = this.startDateChange.bind(this);
		this.endDateChange = this.endDateChange.bind(this);
		this.descriptionChange = this.descriptionChange.bind(this);

		this.state = {
			place: "",
			title: "",
			startDate: "",
			endDate: "",
			description: "",
		};
	}
	placeChange(e) {
		this.setState({
			place: e.target.value,
		});
	}
	titleChange(e) {
		this.setState({
			title: e.target.value,
		});
	}
	startDateChange(e) {
		this.setState({
			startDate: e.target.value,
		});
	}
	endDateChange(e) {
		this.setState({
			endDate: e.target.value,
		});
	}
	descriptionChange(e) {
		this.setState({
			description: e.target.value,
		});
	}
	onSubmitInfo(e) {
		e.preventDefault();
		let obj = this.state;
		this.props.onSubmitted(obj);
	}
	render() {
		return (
			<form onSubmit={this.onSubmitInfo} className="pd-1x body-form">
				<InputComponent
					handleInputChange={this.placeChange}
					id={this.props.place.toLowerCase()}
					title={this.props.place}
					type="text"
				/>
				<InputComponent
					handleInputChange={this.titleChange}
					id={this.props.title.toLowerCase()}
					title={this.props.title}
					type="text"
				/>
				<div className="form-date pd-1px">
					<InputComponent
						handleInputChange={this.startDateChange}
						id="startDate"
						title="From"
						type="date"
					/>
					<InputComponent
						handleInputChange={this.endDateChange}
						id="endDate"
						title="To"
						type="date"
					/>
				</div>
				<textarea
					onChange={this.descriptionChange}
					id="description"
					title="Description"
					rows="3"
					cols="30"
					placeholder="2 Lines Max"
				/>
				<div>
					<button onClick={this.props.onCancel}>Cancel</button>
					<button type="submit"> Submit</button>
				</div>
			</form>
		);
	}
}
class SkillsForm extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmitInfo = this.onSubmitInfo.bind(this);
		this.skillChange = this.skillChange.bind(this);

		this.state = {
			skill: "",
		};
	}
	skillChange(e) {
		this.setState({
			skill: e.target.value,
		});
	}

	onSubmitInfo(e) {
		e.preventDefault();
		let obj = this.state;
		this.props.onSubmitted(obj);
	}
	render() {
		return (
			<form onSubmit={this.onSubmitInfo} className="pd-1x skill-form">
				<InputComponent
					handleInputChange={this.skillChange}
					id={this.props.skill.toLowerCase()}
					title={this.props.skill}
					type="text"
				/>
				<div>
					<button onClick={this.props.onCancel}>Cancel</button>
					<button type="submit"> Submit</button>
				</div>
			</form>
		);
	}
}
export { Form, SkillsForm };
