import { useState } from "react";
import Input from "./components/input/Input";
import * as Styled from "./styled";

function App() {

	const [pipeDiameter, setPipeDiameter] = useState(0);
	const [measuredMM, setMeasuredMM] = useState(0);
	const [measuredTemp, setMeasuredTemp] = useState("");

	const [speed, setSpeed] = useState(0);

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
		<Styled.Wrapper>
			<div>
				<Input label="მილის დიამეტრი" getValue={getPipeDiameter}/>
				<Input label="გაზომილი მმ.წყ.სვ" getValue={getMeasuredMM}/>
				<Input label="გაზომილი ტემპერატურა" getValue={getMeasuredTemp}/>
			</div>
			<div>Result: {speed.toFixed(2)}</div>
			<button onClick={calculate}>Calculate</button>
		</Styled.Wrapper>

	);
}

export default App;
