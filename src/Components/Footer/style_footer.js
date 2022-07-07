import styled from "styled-components";
import { mobile } from "../../Constants/brekpoints";
import { primaryColor, borderColor } from "../../Constants/color";

export const ContainerFooter = styled.div`
  display: flex;
  background-color: ${primaryColor};
  bottom: 0;
  position: fixed;
  color: white;
  width: 100vw;
  height: 50px;
  align-items: center;
  border-top: 1px solid ${borderColor};
  justify-content: center;
  z-index: 2;

  .links-footer {
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
  }

  .links-footer p {
    padding: 0 1rem;
    height: 45px;
    display: flex;
    align-items: center;
    font-size: 13px;
  }

  .icon-container {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white-100);
  }

  .icon-footer {
    font-size: 1.25rem;
    transition: 0.5s;
  }

  .icon-footer:hover {
    color: var(--gray-100);
  }

  .text-footer {
    font-size: 14px;
  }

  .select-language {
    position: absolute;
    right: 1rem;
    width: 90px;
    padding: 1px;
    height: 30px;
    border: none;
    outline: none;
    background-color: var(--gray-500);
    color: var(--white-100);
  }

  @media screen and (max-width: ${mobile}px) {
    .text-footer {
      display: none;
    }
  }
`;
