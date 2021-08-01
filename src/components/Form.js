import React from "react";
import { InputComponent } from "./Input_component";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmitEducationInfo =
			this.onSubmitEducationInfo.bind(this);
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
	onSubmitEducationInfo(e) {
		e.preventDefault();
		let obj = this.state;
		console.log(obj);
		this.props.onSubmitted(obj);
	}
	render() {
		return (
			<form onSubmit={this.onSubmitEducationInfo} className="pd-1x">
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
					rows="2"
					cols="60"
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

export { Form };
