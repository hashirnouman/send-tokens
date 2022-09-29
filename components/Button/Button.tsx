import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 45px;
  background: ${(props) => props.theme.colors.main} padding-box;
  color: ${(props) => props.theme.colors.white};
  border-radius: 50px;
  border: 3px solid white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  margin: 10px;
`;
export { Button };
