import React, { useState } from "react";
function InfoArea(props) {
	let isPreview = props.isPreview;
	let area;
	const [name, setName] = useState(props.name);
	const [isEditing, setIsEditing] = useState(false);

	const handleClick = () => {
		setIsEditing(true);
	};
	const handleChange = (e) => {
		setName(e.target.value);
	};
	const handleOnBlur = (e) => {
		if (!e.target.value) {
			setName(props.name);
			setIsEditing(false);
		} else {
			setName(e.target.value);
			setIsEditing(false);
		}
	};

	if (isEditing) {
		area = (
			<input
				onBlur={handleOnBlur}
				onChange={handleChange}
				type={props.type}
				value={name}
				placeholder={name}
				autoFocus
			/>
		);
	} else {
		area = <h1 onClick={handleClick}>{name}</h1>;
	}
	if (isPreview) {
		area = <h1>{name}</h1>;
	}
	return <div>{area}</div>;
}

function GeneralInfo(props) {
	return (
		<div id="generalInfo">
			<div id="mainGInfo">
				<InfoArea
					name="Title"
					type="text"
					isPreview={props.isPreview}
				/>
				<InfoArea
					name="Full Name"
					type="text"
					isPreview={props.isPreview}
				/>
			</div>
			<div id="sideGInfo">
				<div className="flex-R">
					<i className="fas fa-address-book"></i>
					<InfoArea
						name="Address"
						type="text"
						isPreview={props.isPreview}
					/>
				</div>
				<div className="flex-R">
					<i className="fas fa-phone"></i>
					<InfoArea
						name="Phone Number"
						type="number"
						isPreview={props.isPreview}
					/>
				</div>
				<div className="flex-R">
					<i className="fas fa-envelope"></i>
					<InfoArea
						name="Email"
						type="email"
						isPreview={props.isPreview}
					/>
				</div>
				<div className="flex-R">
					<i className="fas fa-at"></i>
					<InfoArea
						name="Website"
						type="text"
						isPreview={props.isPreview}
					/>
				</div>
			</div>
		</div>
	);
}
export { GeneralInfo };
