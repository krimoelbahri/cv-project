import React from "react";
import { InputComponent } from "./input_component";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmitEducationInfo =
			this.onSubmitEducationInfo.bind(this);
		this.establishmentChange = this.establishmentChange.bind(this);
		this.degreeChange = this.degreeChange.bind(this);
		this.startDateChange = this.startDateChange.bind(this);
		this.endDateChange = this.endDateChange.bind(this);
		this.descriptionChange = this.descriptionChange.bind(this);

		this.state = {
			establishment: "",
			degree: "",
			startDate: "",
			endDate: "",
			description: "",
		};
	}
	establishmentChange(e) {
		this.setState({
			establishment: e.target.value,
		});
	}
	degreeChange(e) {
		this.setState({
			degree: e.target.value,
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
					handleInputChange={this.establishmentChange}
					id="establishment"
					title="Establishment"
					type="text"
				/>
				<InputComponent
					handleInputChange={this.degreeChange}
					id="degree"
					title="Degree"
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
					rows="2" cols="60"
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
