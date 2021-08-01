import "./style/App.css";
import { GeneralInfo } from "./components/General_information";
import { BodyComponent } from "./components/Body_component";
import { SkillsComponent } from "./components/Skills_component";
import React from "react";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.edit = this.edit.bind(this);
		this.preview = this.preview.bind(this);

		this.state = {
			isPreview: false,
		};
	}
	edit() {
		this.setState({
			isPreview: false,
		});
	}
	preview() {
		this.setState({
			isPreview: true,
		});
	}
	render() {
		return (
			<div className="App">
				<div className="buttons-div">
					<button onClick={this.edit}>Edit Mode</button>
					<button onClick={this.preview}>Preview Mode</button>
				</div>
				<div id="cvContainer">
					<GeneralInfo isPreview={this.state.isPreview} />
					<BodyComponent
						name="Experience"
						place="Company"
						title="Position"
						isPreview={this.state.isPreview}
					/>
					<BodyComponent
						name="Education"
						place="Establishment"
						title="Degree"
						isPreview={this.state.isPreview}
					/>
					<SkillsComponent
						name="Skills"
						isPreview={this.state.isPreview}
					/>
				</div>
			</div>
		);
	}
}

export default App;
