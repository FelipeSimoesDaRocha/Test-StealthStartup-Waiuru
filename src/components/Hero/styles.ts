import styled from "styled-components";

export const Section = styled.section`
  position: relative;

  @media screen and (max-width: 700px) {
    padding: 1rem;
  }
`;

export const PagePadding = styled.div`
  padding: 0 40px;

  @media screen and (max-width: 991px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
  }
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
  margin-bottom: 20rem;

  &.UiHeroIntro {
    flex-direction: column;
    gap: 0;
    margin: 0;
  }

  .bannerCloud {
    position: absolute;
    left: -135px;
    top: 245px;
    z-index: -1;
  }

  .house1 {
    position: absolute;
    left: 0;
    bottom: -15rem;
  }

  .house2 {
    position: absolute;
    right: 0;
    bottom: -15rem;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    margin-bottom: 10rem;

    .bannerCloud {
      display: none;
    }
  }

  @media screen and (max-width: 700px) {
    .house1 {
      display: none;
    }

    .house2 {
      width: 421px;
      height: 215px;
    }
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

  @media screen and (max-width: 1200px) {
    height: auto;
    min-height: 0;
    margin-bottom: 60px;
    padding-top: 0;

    h1 {
      font-size: 54px;
      font-weight: 700 !important;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 34px;
      font-weight: 700 !important;
    }

    p {
      font-size: 14px;
    }
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
    transition: all 0.6s ease-out;
  }

  svg:hover {
    cursor: pointer;
    opacity: 0.9;
    transform: scale(1.1);
    transition: all 0.5s ease-out;
  }

  @media screen and (max-width: 1600px) {
    height: 450px;
    max-width: 700px;
  }

  @media screen and (max-width: 900px) {
    height: auto;

    svg {
      display: flex;
      height: 125px;
      margin: 1rem;
      width: 125px;
    }
  }

  @media screen and (max-width: 480px) {
    height: 200px;

    svg {
      height: 60px;
      width: 60px;
    }
  }
`;

export const UiIntroHeader = styled.div`
  z-index: 2;
  display: flex;
  height: 40vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: #3d3a48;

  h1 {
    font-size: 48px;
    font-weight: 400;
  }

  strong {
    color: #9f6ff2;
  }

  p {
    font-family: "Segoe UI";
    font-size: 18px;
    text-shadow: 0px 0px 1px #00000030;
  }

  @media screen and (max-width: 1200px) {
    min-height: 0;
    padding-top: 0;
    height: 35vh;

    h1 {
      font-size: 32px;
      font-weight: 400;
    }
  }
`;

export const UiIntroSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 200px;

  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  label {
    color: #fff !important;
  }

  h1 {
    color: #fff !important;
    font-weight: 100;
    font-size: 29.57px;
    color: #232f3e;
    margin-bottom: 1rem;
  }

  strong {
    font-weight: 400;
    color: #faec57;
  }

  .formInner {
    display: flex;
    flex-direction: column;
  }

  .innerContent {
    margin-top: 100px;
  }

  .form-button {
    background: #9974ff;
    border-radius: 25px;
    transition: all 0.8s ease-out;
  }

  .form-button:hover {
    opacity: 0.8;
    background: #9974ff;
    transform: scale(1.1);
    transition: all 0.8s ease-out;
  }

  .formItem {
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }

  .banner1 {
    position: absolute;
    top: 540px;
    right: 0;
    z-index: -1;
  }

  input {
    border-radius: 20px;
    height: 30px;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column !important;
    gap: 2rem;
    margin-bottom: 100px;

    .bannerImg {
      display: none;
    }

    .innerContent {
      margin-top: 0;
    }

    h1 {
      color: #000 !important;
    }

    strong {
      color: #9f6ff2;
    }

    .banner1 {
      display: none;
    }

    label {
      color: #000 !important;
    }
  }
`;
