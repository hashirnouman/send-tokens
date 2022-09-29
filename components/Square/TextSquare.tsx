import styled from "styled-components";

const TextSquare = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 10px;
  width: 855px;
  height: 575px;
  position: absolute;
  left: 25%;
  padding: 50px;
  color: white;
  font-size: 15px;
`;
export { TextSquare };
