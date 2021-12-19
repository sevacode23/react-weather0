import styled from "styled-components";

import { Top, Middle, Bottom } from "./components";

const Styles = {
  Root: styled.header`
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
