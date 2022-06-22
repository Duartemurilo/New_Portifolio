import styled from "styled-components";
import { emphasisColor, primaryColor } from "../../Constants/color";

export const ContainerHomePage = styled.div`
  background-color: #24292e;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .home {
    padding: 1rem;
    p {
      font-size: 20px;
      color: ${emphasisColor};
      font-weight: 600;
    }
    h2 {
      font-size: 22px;
      font-weight: 400;
      color: gray;
    }
    h1 {
      font-size: 45px;
      color: white;
    }
  }

  .span {
    color: ${emphasisColor};
    font-weight: 600;
  }
  #closetag {
    margin-left: -24px;
  }
  .line {
    color: white;
    font-weight: 300;
    margin-top: 5px;
  }

  .wrapper {
    display: flex;
    gap: 5vw;
    width: 100%;
    justify-content: space-between;
  }

  .btn-likedin {
    text-decoration: none;
    border: none;
    outline: none;
    border-radius: 5px;
    height: 50px;
    width: 180px;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: #0000ff;
    color: white;
    transition: 0.3s;
  }

  .btn-likedin:hover {
    background-color: #0000ff;
    color: white;
  }

  #specialization {
    color: white;
  }
  .CardSpecialization {
    display: flex;
    gap: 1vw;
    height: 40px;
    width: 150%;
    margin-bottom: 30px;
    margin-top: 10px;
    align-items: center;
    border-radius: 10px;
    background-color: ${primaryColor};
    border: none;
    outline: none;

    a {
      text-decoration: none;
    }

    img {
      height: 30px;
      width: 30px;
      margin-left: 10px;
    }

    h2 {
      color: white;
      font-size: 14px;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 1375px) {
    .wrapper {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      margin-left: -0.2rem;
    }

    #specialization {
      margin-top: 10vh;
    }
    .CardSpecialization {
      width: 100%;
      gap: 2vw;
      h2 {
        font-size: 1rem;
      }
      img {
        height: 23px;
        width: 23px;
        margin-left: 10px;
      }
    }
    .home {
      margin-top: 0;
      width: 90%;
      height: 32vh;
      justify-content: center;
      align-items: center;
      margin-bottom: 5rem;
      h1 {
        font-size: 35px;
      }
      p {
        font-size: 16px;
      }
    }

    .home {
      order: 2;
    }
    .btn-likedin {
      width: 100%;
    }
  }
`;
