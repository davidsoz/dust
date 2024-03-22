import { useState } from "react";
import Input from "./components/input/Input";

function App() {

	const [pipeDiameter, setPipeDiameter] = useState(0);
	const [measuredMM, setMeasuredMM] = useState(0);
	const [measuredTemp, setMeasuredTemp] = useState("");

	const [speed, setSpeed] = useState("");

	const getPipeDiameter = (value) => {
		setPipeDiameter(value);
	}

	const getMeasuredMM = (value) => {
		setMeasuredMM(value);
	}

	const getMeasuredTemp = (value) => {
		setMeasuredTemp(value);
	}

	const calculate = () => {
		const sp = (2*9.81*measuredMM*0.586) / (1.29*(273/(273+measuredTemp)))
		setSpeed(Math.pow(sp, 0.5))
	}

	// (2*9.81*E7*0.586) / (1.29*(273/(273+E8)))

	return (
		<>
			<div>
				<Input label="მილის დიამეტრი" getValue={getPipeDiameter}/>
				<Input label="გაზომილი მმ.წყ.სვ" getValue={getMeasuredMM}/>
				<Input label="გაზომილი ტემპერატურა" getValue={getMeasuredTemp}/>
			</div>
			<div>{speed}</div>
			<button onClick={calculate}>Calculate</button>
		</>

	);
}

export default App;
