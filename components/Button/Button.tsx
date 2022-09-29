import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 45px;
  background: ${(props) => props.theme.colors.main} padding-box;
  color: ${(props) => props.theme.colors.white};
  border-radius: 50px;
  border: 1px solid white;
  opacity: 1;
  font-family: inherit;
 
  cursor: pointer;

`;
export { Button };
