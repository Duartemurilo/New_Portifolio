import styled from "styled-components";
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

  .containerContact {
    display: flex;
    justify-content: center;
    gap: 6rem;
    align-items: center;
  }
  .class-name {
    color: ${emphasisColor};
    font-size: 1.2rem;
  }

  .element {
    color: white;
    font-size: 1.2rem;
  }

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

  .containerTitle {
    width: min(400px, 90vw);
    margin-top: 30px;
    text-align: center;
  }

  .title {
    font-size: 2rem;
    color: white;
  }

  .message {
    color: #768390;
    font-size: 1rem;
    margin-top: 1.5rem;
  }

  .list-contact {
    counter-reset: line;

    position: relative;
    white-space: pre-wrap;
    padding-left: 7rem;
  }

  .list-contact .line {
    display: block;
    line-height: 1.5em;
  }

  .list-contact .line:before {
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

  @media screen and (max-width: 1150px) {
    .containerContact {
      flex-direction: column;
      gap: 4rem;
    }

    .list-contact .line:before {
      border-left: none;
      padding-left: 1rem;
    }

    .list-contact {
      padding-left: 1.6rem;
    }

    .title {
      font-size: 1.8rem;
    }

    .containerTitle {
      border-bottom: 1px solid ${borderColor};
      padding-bottom: 4rem;
    }
  }
`;
