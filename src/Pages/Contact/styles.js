import styled from "styled-components";
import { mobile } from "../../Constants/brekpoints";
import {
  backGroundColor,
  emphasisColor,
  borderColor,
} from "../../Constants/color";

export const ContainerContact = styled.div`
  background-color: ${backGroundColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  .key-name {
    color: white;
    margin-left: 1.2rem;
    font-size: 1.2rem;
  }

  a {
    color: ${emphasisColor};
    list-style: none;
    font-size: 1.2rem;
  }

  @media screen and (max-width: ${mobile}px) {
    .title {
      font-size: 1.8rem;
    }

    .containerTitle {
      border-bottom: 1px solid ${borderColor};
      padding-bottom: 4rem;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
  align-items: center;
  @media screen and (max-width: ${mobile}px) {
    flex-direction: column;
    margin-left: auto;
    width: 100%;
    padding-top: 100px;
    gap: 6vh;
  }
`;

export const LeftSide = styled.div`
  width: min(400px, 90vw);
  margin-top: 30px;
  text-align: center;

  h1 {
    font-size: 2rem;
    color: white;
  }
  h2 {
    color: #768390;
    font-size: 1rem;
    margin-top: 1.5rem;
  }

  @media screen and (max-width: ${mobile}px) {
    border-bottom: 1px solid ${borderColor};
    padding-bottom: 30px;
  }
`;

export const ListContact = styled.div`
  counter-reset: line;
  position: relative;
  white-space: pre-wrap;
  padding-left: 7rem;
  .class-name {
    color: ${emphasisColor};
    font-size: 1.2rem;
  }
  .element {
    color: white;
    font-size: 1.2rem;
  }

  .line {
    display: block;
    line-height: 1.5em;
  }
  .line ::before {
    font-size: 1rem;
    font-weight: normal;
    position: absolute;
    left: -10px;
    content: counter(line);
    counter-increment: line;
    display: inline-block;
    border: none;
    color: white;
    font-family: "Fira Code", monospace;
    padding-left: 6rem;
    border-left: 1px solid ${borderColor};
  }
  @media (max-width: ${mobile}px) {
    padding-left: 1.6rem;
    width: 90%;
    .line:before {
      border-left: none;
      padding-left: 1rem;
    }
  }
`;
