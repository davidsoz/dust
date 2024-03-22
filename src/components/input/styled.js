import { styled } from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3px;
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease-in-out;
  }
`;