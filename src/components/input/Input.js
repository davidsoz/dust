import { useState } from "react";
import * as Styled from "./styled";

const Input = ({ label, getValue, defaultValue }) => {
	const [value, setValue] = useState(defaultValue || "");

	const inputChangeHandler = (e) => {
		if(e.target.value === ""){
			setValue("")
			getValue(0)
			return;
		}
		if(value === "0" && e.target.value[1] !== ".") {
			return;
		}
		setValue(e.target.value)
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
