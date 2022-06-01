import styled from "styled-components";
import { backGroundColor, emphasisColor } from "../../Constants/color";

export const ContainerAboutPage = styled.div`
  background-color: ${backGroundColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .main-wrapper.about {
    gap: 4rem;
  }

  .about-container {
    width: min(800px, 90vw);
    margin-top: 30px;
  }

  .title-about {
    font-size: 40px;
    margin-left: 2.5rem;
    color: white;
  }

  .text-about {
    color: white;
    margin-left: 2.4rem;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  .text-about.last {
    margin-bottom: 0;
  }

  .span-tag {
    color: ${emphasisColor};
  }

  .span-tag.body {
    margin-left: 0.8rem;
  }

  .span-tag.content {
    margin-left: 1.6rem;
  }

  .highlight {
    color: #539bf5;
  }

  @media screen and (max-width: 1090px) {
    height: 135vh;
    padding-left: 8px;
    .main-wrapper.about {
      flex-direction: column;
      gap: 0.5rem;
    }

    .about-container {
      width: min(600px, 90vw);
      margin-top: 120px;
    }
  }
`;
