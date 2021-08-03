import "./style/App.css";
import { GeneralInfo } from "./components/General_information";
import { BodyComponent } from "./components/Body_component";
import { SkillsComponent } from "./components/Skills_component";
import React, { useState } from "react";

function App() {
	const [isPreview, setIsPreview] = useState(false);

	const edit = () => {
		setIsPreview(false);
	};
	const preview = () => {
		setIsPreview(true);
	};
	return (
		<div className="App">
			<div className="buttons-div">
				<button onClick={edit}>Edit Mode</button>
				<button onClick={preview}>Preview Mode</button>
			</div>
			<div id="cvContainer">
				<GeneralInfo isPreview={isPreview} />
				<BodyComponent
					name="Experience"
					place="Company"
					title="Position"
					isPreview={isPreview}
				/>
				<BodyComponent
					name="Education"
					place="Establishment"
					title="Degree"
					isPreview={isPreview}
				/>
				<SkillsComponent name="Skills" isPreview={isPreview} />
			</div>
		</div>
	);
}

export default App;
