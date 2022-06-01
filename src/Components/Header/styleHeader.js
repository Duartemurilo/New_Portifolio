import styled from "styled-components";
import { primaryColor, borderColor } from "../../Constants/color";

export const HeaderBar = styled.div`
  background-color: ${primaryColor};
  border-bottom: 1px solid ${borderColor};
  color: white;
  font-size: 13px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 2;
  .title {
    display: flex;
    align-items: center;
    position: absolute;
    gap: 10px;
    left: 10px;
  }
`;
