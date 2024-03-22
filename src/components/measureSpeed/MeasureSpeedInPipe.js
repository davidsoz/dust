import { useState } from "react";
import * as Styled from "./styled";
import Input from "../input/Input";

function MeasureSpeedInPipe() {

	// const [pipeDiameter, setPipeDiameter] = useState(0);
	// const getPipeDiameter = (value) => {
	// 	setPipeDiameter(value);
	// }
	const [measuredMM, setMeasuredMM] = useState(0);
	const [measuredTemp, setMeasuredTemp] = useState(0);
	const [bunikSize, setBunikSize] = useState("");

	const [speed, setSpeed] = useState(0);
	const [aspirator, setAspirator] = useState(0);

	const getMeasuredMM = (value) => {
		setMeasuredMM(value);
	}

	const getMeasuredTemp = (value) => {
		setMeasuredTemp(value);
	}

	const calculateSpeed = () => {
		const speed = (2 * 9.81 * measuredMM * 0.586) / (1.29 * (273 / (273 + measuredTemp)))
		setSpeed(Math.pow(speed, 0.5))
	}

	const getBunikSize = value => {
		setBunikSize(value)
	}

	const calculateAsp = () => {
		const asp = speed * bunikSize * bunikSize * 0.0471;
		setAspirator(asp)
	}

	return (
		<>
			<Styled.Wrapper>
				<h4>მილში სიჩქარის ინსტრუმენტალური გაზომვა</h4>
				<Styled.InputsWrapper>
					{/* <Input label="მილის დიამეტრი" getValue={getPipeDiameter}/> */}
					<Input label="გაზომილი მმ.წყ.სვ" getValue={getMeasuredMM}/>
					<Input label="გაზომილი ტემპერატურა" getValue={getMeasuredTemp}/>
				</Styled.InputsWrapper>
				<div style={{padding: "5px"}}>Result: {speed.toFixed(2)}</div>
				<button onClick={calculateSpeed}>Calculate</button>
			</Styled.Wrapper>
			<Styled.Wrapper>
				<h4>{"აპირატორის ლიტრაჟობის ანგარიში თუ ტემპ<30 C°"}</h4>
				<Styled.InputsWrapper>
					<Input label="მილაკის ბუნიკის ზომა" getValue={getBunikSize}/>
				</Styled.InputsWrapper>
				<div style={{padding: "5px"}}>Result: {aspirator.toFixed(2)}</div>
				<button onClick={calculateAsp}>Calculate</button>
			</Styled.Wrapper>
		</>

	);
}

export default MeasureSpeedInPipe;
