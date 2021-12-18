import styled from "styled-components";

const Styles = {
  Root: styled.div`
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
};

export const Middle = () => (
  <Styles.Root>
    <Styles.WidthContainer>
      <Styles.Info>° Kyiv, Kiev, Ukraine</Styles.Info>
    </Styles.WidthContainer>
  </Styles.Root>
);
