import "./style/App.css";
import { GeneralInfo } from "./components/General_information";
import { BodyComponent } from "./components/Body_component";
function App() {
	return (
		<div className="App">
			<div id="cvContainer">
				<GeneralInfo />
				<BodyComponent
					name="Experience"
					place="Company"
					title="Position"
				/>
				<BodyComponent
					name="Education"
					place="Establishment"
					title="Degree"
				/>
			</div>
		</div>
	);
}

export default App;
