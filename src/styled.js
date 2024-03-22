import { styled } from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3px;
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