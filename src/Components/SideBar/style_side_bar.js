import styled from "styled-components";
import { primaryColor, borderColor } from "../../Constants/color";

export const ContainerSideBar = styled.div`
  height: 100%;
  background-color: ${primaryColor};
  width: 18rem;
  color: white;
  border-right: 1px solid ${borderColor};
  border-top: 1px solid ${borderColor};
  position: fixed;
  left: 0;
  top: 40px;
  overflow-x: hidden;
  z-index: 2;
  .titlesideBar {
    padding: 0.7rem 1rem;
    letter-spacing: 1px;
    margin-bottom: 0.75rem;
    font-size: 14px;
  }

  .portifolio {
    display: flex;
    align-items: center;
    height: 28px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s;
    gap: 0.5rem;
    color: white;
    width: 100%;
    background-color: ${primaryColor};
    border: none;
    outline: none;
    padding: 0.2rem 1.2rem;
    :hover {
      background-color: #24292e;
    }
  }

  .file {
    padding: 0.3rem 3rem;
    height: 27px;
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    color: white;
    :hover {
      background-color: #24292e;
    }
  }

  .icon-side-bar {
    width: 18px;
  }

  @media screen and (max-width: 1150px) {
    right: 0;
    left: auto;
    top: 42px;
    width: 300px;
    display: block;
    transition: 0.3s ease;
    border-left: 1px solid ${borderColor};
    transition: 0.5s ease-in;
    .title {
      opacity: 1;
      transition: 0.5s ease-in-out;
    }

    .portifolio {
      opacity: 1;
      transition: 0.4s ease;
    }

    .file {
      opacity: 1;
      transition: 0.3s ease;
    }
  }
`;
