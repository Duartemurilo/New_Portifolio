import styled from "styled-components";
import { mobile } from "../../Constants/brekpoints";
import {
  primaryColor,
  borderColor,
  backGroundColor,
} from "../../Constants/color";

export const ContainerfileHeader = styled.div`
  background-color: ${primaryColor};
  height: 36px;
  position: fixed;
  top: 40px;
  width: 100vw;
  left: 18rem;
  z-index: 1;
  border-bottom: 1.5px solid ${borderColor};

  .nav-container {
    display: flex;
  }

  .nav-bar {
    border: none;
    height: 36px;
    width: 159px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    outline: none;
    cursor: pointer;
    border: 1px solid ${borderColor};
    color: #768390;
    font-size: 14px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 36px;
    text-decoration: none;
  }

  .nav-bar.active {
    border-right: 1.5px solid ${borderColor};
    border-bottom: none;
    background-color: ${backGroundColor};
    color: white;
  }

  .icon-nav {
    width: 18px;
  }

  @media screen and (max-width: ${mobile}px) {
    position: absolute;
    left: 0;
    color: white;

    .nav-bar {
      display: none;
    }
    .nav-bar.active {
      cursor: pointer;
      text-decoration: none;
      display: flex;
      align-items: center;
      height: 36px;
      width: 142.703px;
      color: white;
      font-size: 14px;
      padding: 0;
    }
  }
`;
