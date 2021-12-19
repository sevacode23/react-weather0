import styled from "styled-components";

import { Triangle } from "../../ui";

const Styles = {
  Root: styled.div`
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
  DropDownLi: styled.li`
    display: flex;
    align-items: center;
    border-bottom: none !important;
  `,
  LiTriangle: styled(Triangle)`
    margin-left: 8px;
  `,
};

export const Bottom = () => (
  <Styles.Root>
    <Styles.NavCentered>
      <Styles.List>
        <li>Today</li>
        <li>Hourly</li>
        <li>10 Day</li>
        <li>Weekend</li>
        <li>Monthly</li>
        <li>Radar</li>
        <li>Video</li>
        <Styles.DropDownLi>
          More Forecast <Styles.LiTriangle />
        </Styles.DropDownLi>
      </Styles.List>
    </Styles.NavCentered>
  </Styles.Root>
);
