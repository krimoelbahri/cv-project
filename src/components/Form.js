import React, { useState } from "react";
import { InputComponent } from "./Input_component";

function Form(props) {
	const [place, setPlace] = useState("");
	const [title, setTitle] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [description, setDescription] = useState("");

	const placeChange = (e) => {
		setPlace(e.target.value);
	};
	const titleChange = (e) => {
		setTitle(e.target.value);
	};
	const startDateChange = (e) => {
		setStartDate(e.target.value);
	};
	const endDateChange = (e) => {
		setEndDate(e.target.value);
	};
	const descriptionChange = (e) => {
		setDescription(e.target.value);
	};
	const onSubmitInfo = (e) => {
		e.preventDefault();
		let obj = { place, title, startDate, endDate, description };
		props.onSubmitted(obj);
	};
	return (
		<form onSubmit={onSubmitInfo} className="pd-1x body-form">
			<InputComponent
				handleInputChange={placeChange}
				id={props.place.toLowerCase()}
				title={props.place}
				type="text"
			/>
			<InputComponent
				handleInputChange={titleChange}
				id={props.title.toLowerCase()}
				title={props.title}
				type="text"
			/>
			<div className="form-date pd-1px">
				<InputComponent
					handleInputChange={startDateChange}
					id="startDate"
					title="From"
					type="date"
				/>
				<InputComponent
					handleInputChange={endDateChange}
					id="endDate"
					title="To"
					type="date"
				/>
			</div>
			<textarea
				onChange={descriptionChange}
				id="description"
				title="Description"
				rows="2"
				cols="60"
				placeholder="2 Lines Max"
			/>
			<div>
				<button onClick={props.onCancel}>Cancel</button>
				<button type="submit"> Submit</button>
			</div>
		</form>
	);
}
function SkillsForm(props) {
	const [skill, setSkill] = useState("");

	const skillChange = (e) => {
		setSkill(e.target.value);
	};
	const onSubmitInfo = (e) => {
		e.preventDefault();
		let obj = { skill };
		props.onSubmitted(obj);
	};

	return (
		<form onSubmit={onSubmitInfo} className="pd-1x skill-form">
			<InputComponent
				handleInputChange={skillChange}
				id={props.skill.toLowerCase()}
				title={props.skill}
				type="text"
			/>
			<div>
				<button onClick={props.onCancel}>Cancel</button>
				<button type="submit"> Submit</button>
			</div>
		</form>
	);
}
export { Form, SkillsForm };
