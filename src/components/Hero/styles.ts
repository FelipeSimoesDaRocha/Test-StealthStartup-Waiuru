import styled from "styled-components";

export const HomeHero = styled.div`
  position: relative;
`;

export const PagePadding = styled.div`
  padding: 0 40px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1700px;
  margin-right: auto;
  margin-left: auto;
`;

export const HeroIntro = styled.div`
  position: relative;
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const IntroContent = styled.div`
  width: 100%;
  max-width: 550px;
`;
export const IntroHeader = styled.div`
  z-index: 2;
  display: flex;
  height: 80vh;
  min-height: 580px;
  margin-bottom: 45px;
  padding-top: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  color: #3d3a48;

  h1 {
    font-size: 64px;
    font-weight: 700 !important;
  }

  strong {
    color: #9f6ff2;
  }

  p {
    font-family: "Segoe UI";
    font-size: 18px;
    text-shadow: 0px 0px 1px #0000006e;
  }

  @media screen and (max-width: 991px) {
    height: auto;
    min-height: 0;
    margin-bottom: 100px;
    padding-top: 0;
  }
`;

export const IntroMovie = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  max-width: 1050px;
  height: 600px;
  background: linear-gradient(0deg, #624282, #624282);
  border-radius: 25px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
