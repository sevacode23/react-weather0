import { useState } from "react";
import styled from "styled-components";

import { Triangle } from "../../ui";

const Styles = {
  Root: styled.li`
    position: relative;
    border-bottom: none !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  `,
  Button: styled.button`
    display: flex;
    align-items: center;
    height: 100%;
    background: transparent;
    font: inherit;
    color: inherit;
    outline: none;
    border: none;
    cursor: inherit;
  `,
  Triangle: styled(Triangle)<{ open: boolean }>`
    margin-left: 8px;
    ${({ open }) => open && "transform: scaleY(-1)"};
  `,
  DropDown: styled.div<{ show: boolean }>`
    display: ${({ show }) => (show ? "block" : "none")};
    position: absolute;
    width: 280px;
    top: 100%;
    right: 0;
    padding: 20px;
    border-radius: 6px;
    background-color: white;
    color: black;
    cursor: auto;
  `,
  DropHead: styled.h3`
    text-transform: uppercase;
  `,
  DropContent: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 16px;
    column-gap: 12px;
    margin-top: 16px;

    & > span {
      cursor: pointer;

      &:hover {
        color: blue;
      }
    }
  `,
};

export const DropMenu = () => {
  const [show, setShow] = useState(false);

  const onClick = () => setShow((current) => !current);

  const onBlur = () => {
    if (show) {
      setShow(false);
    }
  };

  return (
    <Styles.Root>
      <Styles.Button onClick={onClick} onBlur={onBlur}>
        More Forecast <Styles.Triangle open={show} />
      </Styles.Button>
      <Styles.DropDown show={show}>
        <Styles.DropHead>Specialty Forecasts</Styles.DropHead>
        <Styles.DropContent>
          <span>Yesterday's weather</span>
          <span>Allergy Tracker</span>
          <span>Fishing</span>
          <span>{"Cold & Flu"}</span>
          <span>Air Quality Forecast</span>
        </Styles.DropContent>
      </Styles.DropDown>
    </Styles.Root>
  );
};
