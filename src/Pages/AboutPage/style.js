import styled from "styled-components";
import { backGroundColor, emphasisColor } from "../../Constants/color";
import { mobile } from "../../Constants/brekpoints";

export const Container = styled.div`
  background-color: ${backGroundColor};
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
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

  @media screen and (max-width: ${mobile}px) {
    align-items: center;

    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-height: 740px) {
      padding-top: 24vh;
      padding-bottom: 24vh;
    }
  }
`;

export const Main = styled.div`
  max-width: 800px;
  width: 50vw;
  margin-left: 32rem;
  @media screen and (max-width: ${mobile}px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 0px;
    height: auto;
  }
`;

export const AboutContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  @media screen and (max-width: ${mobile}px) {
    width: 90%;
    height: auto;
  }
`;
