import { styled } from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  span {
    display: inline-block;
    background-color: #32de84;
    min-width: 80px;
    text-align: center;
    padding: 4px;
    color: #fff;
    border-radius: 3px;
    font-weight: 700;
  }

  h4 {
    text-align: center;
  }

  button {
    padding: 10px 20px;
    background-color: dodgerblue;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease-in-out;
  }

  button:hover {
    background-color: #007acc;
  }

  button:active {
    background-color: #005f99;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;