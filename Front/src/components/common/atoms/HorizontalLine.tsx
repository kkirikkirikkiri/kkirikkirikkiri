import { CSSProperties, FC } from "react";

interface PropTypes {
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  color?: string;
  height?: number;
  flex?: number;
  style?: CSSProperties;
}

const HorizontalLine: FC<PropTypes> = ({
  marginHorizontal = 0,
  height = 1,
  ...props
}) => (
  <div
    style={{
      width: props.flex === undefined ? "100%" : undefined,
      flex: props.flex,
      height: height === undefined ? 1 : height,
      marginLeft: props.marginVertical,
      marginRight: props.marginVertical,
      marginTop: marginHorizontal,
      marginBottom: marginHorizontal,
      borderBottomWidth: height === undefined ? 1 : height,
      borderColor: props.color,
      borderRadius: 1,
      borderBottomStyle: "solid",
      ...props.style,
    }}
  />
);

export default HorizontalLine;
