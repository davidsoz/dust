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
	const [aspiratorHot, setAspiratorHot] = useState(0);
	const [bar, setBar] = useState(750);
	const [statV, setStatV] = useState("");
	const [statW, setStatW] = useState("");
	const [tempAsp, setTempAsp] = useState("");
	const [tempPipe, setTempPipe] = useState("");

	const getTempPipe = (value) => {
		setTempPipe(value)
	}

	const getTempAsp = (value) => {
		setTempAsp(value)
	}

	const getStatW = (value) => {
		setStatW(value)
	}

	const getStatV = (value) => {
		setStatV(value)
	}

	const getBar = (value) => {
		setBar(value)
	}

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

	const calculateAspHot = () => {
		const aspHot = aspirator*(((bar+((statV)/13.6))*(273+tempAsp))/((bar-(statW/13.6))*(273+tempPipe)));
		setAspiratorHot(aspHot)
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
				<div style={{padding: "5px"}}>სიჩქარე, მ/წმ: <span>{speed.toFixed(2)}</span></div>
				<button onClick={calculateSpeed}>Calculate</button>
			</Styled.Wrapper>
			<Styled.Wrapper>
				<h4>{"ასპირატორის ლიტრაჟობის ანგარიში თუ ტემპ<30 C°"}</h4>
				<Styled.InputsWrapper>
					<Input label="მილაკის ბუნიკის დიამეტრი" getValue={getBunikSize}/>
				</Styled.InputsWrapper>
				<div style={{padding: "5px"}}>ასპირატორი, ლ/წთ: <span>{aspirator.toFixed(2)}</span></div>
				<button onClick={calculateAsp}>Calculate</button>
			</Styled.Wrapper>
			<Styled.Wrapper>
				<h4>{"ასპირატორის ლიტრაჟობის ანგარიში თუ ტემპ>30 C°"}</h4>
				<Styled.InputsWrapper>
					<Input label="ბარ. წნევა" getValue={getBar} defaultValue={750}/>
					<Input label="გაზომილი მმ.წყ.სვ" getValue={getStatV}/>
					<Input label="გაზომილი მმ.წყ.სვ" getValue={getStatW}/>
					<Input label="ტემპ. ასპირატ" getValue={getTempAsp}/>
					<Input label="ტემპ. მილში" getValue={getTempPipe} />
				</Styled.InputsWrapper>
				<div style={{padding: "5px"}}>ასპირატორი, ლ/წთ: <span>{aspiratorHot.toFixed(2)}</span></div>
				<button onClick={calculateAspHot}>Calculate</button>
			</Styled.Wrapper>
		</>

	);
}

export default MeasureSpeedInPipe;
