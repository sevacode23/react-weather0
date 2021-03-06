import styled from "styled-components";

import { Triangle } from "../ui";
import { Image } from "../image";

import { DropMenu } from "./components";

const Styles = {
  Root: styled.header`
    color: white;
  `,
  TopContainer: styled.div`
    padding: 11px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: 1280px;

    & > div {
      flex: 1;

      &:last-child {
        justify-content: flex-end;
      }
    }
  `,

  TitleContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  Rectangle: styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    font-size: 12px;
    line-height: 1.1;
    font-weight: bold;
    color: #05336b;

    & > div {
      width: fit-content;
      margin: 0 auto;
    }
  `,
  Title: styled.span`
    font-size: 18px;
    letter-spacing: 0.6px;
    margin-left: 16px;
  `,
  InputContainer: styled.div`
    max-width: 380px;
    position: relative;
    display: flex;
    align-items: center;
  `,
  Input: styled.input`
    width: 100%;
    border-radius: 25px;
    box-sizing: border-box;
    padding: 8px 12px;
    background-color: hsla(0, 0%, 100%, 0.2);
    color: inherit;
    font: inherit;
    text-align: center;
    outline: 3px solid rgba(0, 0, 0, 0);
    transition: outline 0.1s ease-out;

    &:focus {
      outline: 3px solid white;
    }

    &::placeholder {
      color: inherit;
      font: inherit;
    }
  `,
  ButtonsContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;
      color: inherit;
      font: inherit;
      padding: 0;
    }
  `,
  IconsButton: styled.button`
    display: flex;
    align-items: center;

    > * + * {
      margin-left: 16px;
    }
  `,
  SearchIcon: styled(Image)`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  `,
  BurgerButton: styled.button`
    background-color: transparent;
    width: 30px;
    margin-left: 24px;

    > div {
      height: 3px;
      width: 100%;
      background-color: white;

      &:not(:first-child) {
        margin-top: 3px;
      }
    }
  `,
  MiddleContainer: styled.div`
    background-color: hsla(0, 0%, 100%, 0.2);
  `,
  WidthContainer: styled.div`
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
  `,
  Info: styled.div`
    width: 35%;
    border-right: 1px solid hsla(0, 0%, 100%, 0.2);
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
  `,
  BottomContainer: styled.div`
    background-color: rgba(0, 0, 0, 0.4);
  `,
  NavCentered: styled.nav`
    max-width: 1280px;
    margin: 0 auto;
  `,
  List: styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0 60px;
    list-style: none;

    & > li {
      margin: 0;
      padding: 0;

      padding: 10px 13px;
      border-bottom: 2px solid transparent;
      cursor: pointer;

      &:hover {
        border-bottom: 2px solid white;
      }
    }
  `,
};

export const Header = () => (
  <Styles.Root>
    <Styles.TopContainer>
      <Styles.TitleContainer>
        <Styles.Rectangle>
          <div>
            The
            <br />
            Weather
            <br />
            Channel
          </div>
        </Styles.Rectangle>
        <Styles.Title>
          An <b>IBM</b> Business
        </Styles.Title>
      </Styles.TitleContainer>

      <Styles.InputContainer>
        <Styles.Input type="text" placeholder="Search City or Zip Code" />
        <Styles.SearchIcon file="search" width="20px" />
      </Styles.InputContainer>

      <Styles.ButtonsContainer>
        <Styles.IconsButton>
          <Image file="earth" width="24px" height="24px" />
          <span>US | ??F</span>
          <Triangle />
        </Styles.IconsButton>
        <Styles.BurgerButton>
          <div></div>
          <div></div>
          <div></div>
        </Styles.BurgerButton>
      </Styles.ButtonsContainer>
    </Styles.TopContainer>

    <Styles.MiddleContainer>
      <Styles.WidthContainer>
        <Styles.Info>?? Kyiv, Kiev, Ukraine</Styles.Info>
      </Styles.WidthContainer>
    </Styles.MiddleContainer>

    <Styles.BottomContainer>
      <Styles.NavCentered>
        <Styles.List>
          <li>Today</li>
          <li>Hourly</li>
          <li>10 Day</li>
          <li>Weekend</li>
          <li>Monthly</li>
          <li>Radar</li>
          <li>Video</li>
          <DropMenu />
        </Styles.List>
      </Styles.NavCentered>
    </Styles.BottomContainer>
  </Styles.Root>
);
