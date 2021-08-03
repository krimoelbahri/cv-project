import React from "react";
function InputComponent(props) {
	return (
		<div className="form-div pd-1px">
			<label htmlFor={props.id}>{props.title}</label>
			<input
				onChange={props.handleInputChange}
				id={props.id}
				type={props.type}
				required
			/>
		</div>
	);
}

export { InputComponent };
