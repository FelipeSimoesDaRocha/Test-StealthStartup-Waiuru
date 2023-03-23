import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  top: 50px;
  right: 0;
  bottom: auto;
  z-index: 100;
  background-color: transparent;
  transition: background-color 1.2s;
`;

export const PagePadding = styled.div`
  padding: 0 40px;

  @media screen and (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;
`;

export const NavInner = styled.div`
  position: relative;
  display: flex;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
`;

export const Actions = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  .btnLogin {
    background: #9974ff;
    color: #fff;
    width: 131px;
    height: 48px;
    border-radius: 25px;
    border: none;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    transition: all 0.5s;
    margin-left: 10px !important;

    @media screen and (max-width: 600px) {
      width: 90px;
    }
  }

  .btnLogin:hover {
    transform: scale(1.1);
    transition: all 1s;
    color: #fff;

    span {
      color: #ffffffd9;
      transition: all 1s;
    }
  }

  .btnList {
    border: none;
    background: #463672;
    color: #fff;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    transition: all 0.5s;

    svg {
      display: flex;
      width: 22px;
      height: 22px;
      color: #fff;
      transition: all 0.5s;
    }
  }

  .btnList:hover {
    transform: scale(1.1);
    transition: all 0.5s;

    svg {
      color: #ffffffd9;
      font-style: #ffff;
      transition: all 0.5s;
    }
  }
`;

export const Logo = styled.div`
  position: absolute;
  left: 0;
  top: auto;
  right: auto;
  bottom: auto;
  z-index: 102;
  margin-left: -16px;
  padding: 6px 16px;
  font-size: 20px;
  font-weight: 500;
  transition: all 2s ease;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: -16px;
    padding: 6px 16px;
    font-size: 20px;
    font-weight: 500;
    transition: all 1s ease;
  }

  img {
    opacity: 1;
    transition: all 1s ease;
  }

  img:hover {
    transform: scale(1.1);
    opacity: 0.7;
    transition: all 1s ease;
  }

  p {
    color: #4f3499;
    font-size: 34px;
    font-weight: 400;
    line-height: 42px;
  }

  p:hover {
    transform: scale(1.1);
    transition: all 1s ease;
  }

  @media screen and (max-width: 991px) {
    p {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const CustomSelect = styled.div`
  display: flex;
  align-items: center;
  transition: all 0s;

  select {
    width: 100px;
    height: auto;
    border-radius: 8%;
    border: none !important;
    opacity: hidden;
    text-align: center;
    padding: 10px 0;
    font-size: 16px;
    color: #232f3e;
    background: transparent !important;
    transition: background-color 2s;
  }

  select:hover {
    cursor: pointer;
    color: #232f3e89;
    transition: all 0.5s;
  }

  select:focus-visible {
    border: none;
    outline: none !important;
  }

  select option:checked::selection {
    background: transparent !important;
  }
`;
