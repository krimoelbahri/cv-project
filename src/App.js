import "./style/App.css";
import { GeneralInfo } from "./components/general_information";
import { BodyComponent } from "./components/body_component";
function App() {
	return (
		<div className="App">
			<div id="cvContainer">
				<GeneralInfo />
				<BodyComponent name="Experience" />
				<BodyComponent name="Education" />
			</div>
		</div>
	);
}

export default App;
