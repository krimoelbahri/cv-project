import React, { useState } from "react";
import { Form } from "./Form";
import { Information } from "./Info_component";

function BodyComponent(props) {
	let isPreview = props.isPreview;
	let form;
	let body;

	const [isEditing, setIsEditing] = useState(false);
	const [info, setInfo] = useState([]);

	const handleClick = () => {
		setIsEditing(!isEditing);
	};
	const onSubmitted = (obj) => {
		setIsEditing(!isEditing);
		setInfo(info.concat(obj));
	};
	const onCancel = () => {
		setIsEditing(!isEditing);
	};
	const deleteInformation = (obj) => {
		setInfo(info.filter((object) => object !== obj));
	};

	if (isEditing) {
		form = (
			<Form
				id={props.place.toLowerCase()}
				place={props.place}
				title={props.title}
				onSubmitted={onSubmitted}
				onCancel={onCancel}
			/>
		);
	} else {
		form = <button onClick={handleClick}>Add {props.name}</button>;
	}
	if (!isPreview) {
		body = (
			<>
				<h2>{props.name}</h2>
				<Information
					info={info}
					place={props.place}
					title={props.title}
					isPreview={isPreview}
					deleteClick={deleteInformation}
				/>
				{form}
			</>
		);
	} else {
		body = (
			<>
				<h2>{props.name}</h2>
				<Information
					info={info}
					place={props.place}
					title={props.title}
					isPreview={isPreview}
					deleteClick={deleteInformation}
				/>
			</>
		);
	}
	return <div className="body-info">{body}</div>;
}
export { BodyComponent };
