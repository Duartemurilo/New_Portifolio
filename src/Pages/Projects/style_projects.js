import styled from "styled-components";
import {
  primaryColor,
  borderColor,
  emphasisColor,
} from "../../Constants/color";

export const ContainerProjects = styled.div`
  background-color: #24292e;
  display: flex;
  flex-direction: row;
  width: 100%;
  .containerProjects {
    display: flex;
    flex-direction: column;
    padding-top: 150px;
    align-items: center;
    min-height: 100vh;
    max-height: auto;
    margin-left: 18rem;
  }
  .title-projects {
    font-size: 45px;
    color: white;
  }

  .projects-container {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    gap: 2rem;
    margin-bottom: 100px;
    justify-content: center;
    height: 80%;
    max-height: auto;
  }

  .img-container {
    height: 177.75px;
    cursor: pointer;
  }

  .img-project {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  .card-project {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    width: 350px;
    color: white;
    background-color: ${primaryColor};
    border-radius: 5px;
    padding: 1rem;
    border: 1px solid ${borderColor};
    height: 500px;
    position: relative;
  }

  .title-project {
    color: ${emphasisColor};
    margin-bottom: 0px;
  }

  .technologies {
    display: flex;
    width: 85%;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .span-technologies {
    border-radius: 20px;
    color: ${emphasisColor};
    background-color: #293b4f;
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
  }

  .links-container {
    position: absolute;
    display: flex;
    gap: 1.2rem;
    right: 1rem;
    bottom: 1rem;
  }

  @media screen and (max-width: 500px) {
    overflow-y: auto;
    .title-projects {
      font-size: 30px;
    }

    .containerProjects {
      margin-left: 0rem;
    }
    .card-project {
      height: 510px;
    }
  }
`;
