import React, { useState } from "react";
import { SkillsForm } from "./Form";
import { SkillsInformation } from "./Info_component";

function SkillsComponent(props) {
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
			<SkillsForm
				id={props.name.toLowerCase()}
				skill={props.name}
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
				<SkillsInformation
					info={info}
					deleteClick={deleteInformation}
					isPreview={isPreview}
				/>
				{form}
			</>
		);
	} else {
		body = (
			<>
				<h2>{props.name}</h2>
				<SkillsInformation
					info={info}
					deleteClick={deleteInformation}
					isPreview={isPreview}
				/>
			</>
		);
	}
	return <div className="body-info">{body}</div>;
}
export { SkillsComponent };
