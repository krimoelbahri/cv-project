import "./style/App.css";
import { GeneralInfo } from "./components/General_information";
import { BodyComponent } from "./components/Body_component";
import { SkillsComponent } from "./components/Skills_component";
import React from "react";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isPreview: false,
		};
	}
	setPreviewMode(state) {
		this.setState({
			isPreview: state,
		});
	}

	render() {
		const { isPreview } = this.state;
		return (
			<div className='App'>
				<div className='buttons-div'>
					<button onClick={() => this.setPreviewMode(false)}>
						Edit Mode
					</button>
					<button onClick={() => this.setPreviewMode(true)}>
						Preview Mode
					</button>
				</div>
				<div id='cvContainer'>
					<GeneralInfo isPreview={isPreview} />
					<BodyComponent
						name='Experience'
						place='Company'
						title='Position'
						isPreview={isPreview}
					/>
					<BodyComponent
						name='Education'
						place='Establishment'
						title='Degree'
						isPreview={isPreview}
					/>
					<SkillsComponent name='Skills' isPreview={isPreview} />
				</div>
			</div>
		);
	}
}

export default App;
