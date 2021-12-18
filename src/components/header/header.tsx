import styled from "styled-components";

import { Top, Middle, Bottom } from "./components";

const Styles = {
  Root: styled.header`
    background-color: #05336b;
    color: white;
  `,
};

export const Header = () => (
  <Styles.Root>
    <Top />
    <Middle />
    <Bottom />
  </Styles.Root>
);
