import styled from "styled-components";

const Input = styled.input`
  width: 515px;
  height: 45px;
  background: white;
  color: black;

  border: none;
  border-bottom: 3px solid white;
  cursor: pointer;
  margin: 20px;
  padding: 20px;
  border-radius: 50px;
  &:focus {
    outline: none;
  }
`;
export { Input };
