import styled from "styled-components";

import { Image } from "../../image";

const Styles = {
  Root: styled.div`
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
  Triangle: styled.i`
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid white;
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
};

export const Top = () => {
  return (
    <Styles.Root>
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
          <span>US | °F</span>
          <Styles.Triangle />
        </Styles.IconsButton>
        <Styles.BurgerButton>
          <div></div>
          <div></div>
          <div></div>
        </Styles.BurgerButton>
      </Styles.ButtonsContainer>
    </Styles.Root>
  );
};
