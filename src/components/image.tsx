import styled, { css } from "styled-components";

interface ISizeParams {
  width?: string;
  height?: string;
}

const Styles = {
  Root: styled.div<ISizeParams>`
    flex-shrink: 0;

    ${({ width, height }) =>
      css`
        width: ${width};
        height: ${height};
      `}
  `,
  Img: styled.img`
    max-width: 100%;
    max-height: 100%;
  `,
};

const IMAGE_MAP = {
  search: require("../assets/icons/search.svg"),
  earth: require("../assets/icons/earth.svg"),
};

interface IProps extends ISizeParams {
  file: keyof typeof IMAGE_MAP;
}

const getImage = (file: keyof typeof IMAGE_MAP) => IMAGE_MAP[file].default;

export const Image = (props: IProps) => {
  const { file, ...sizes } = props;

  return (
    <Styles.Root {...sizes}>
      <Styles.Img src={getImage(file)} alt="img" />
    </Styles.Root>
  );
};
