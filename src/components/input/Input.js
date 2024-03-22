import { useState } from "react";
import * as Styled from "./styled";

const Input = ({ label, getValue }) => {
	const [value, setValue] = useState("");

	const inputChangeHandler = (e) => {
		if(e.target.value == 0){
			setValue("")
			getValue(0)
			return;
		}
		setValue(Number(e.target.value))
		getValue(Number(e.target.value))
	}

	return (
		<Styled.Wrapper>
			<div>
				<label htmlFor={label}>{label}</label>
			</div>
			<div>
				<input
					type="number"
					value={value}
					onChange={inputChangeHandler}
					id={label}
				/>
			</div>

		</Styled.Wrapper>

	);
};

export default Input;
