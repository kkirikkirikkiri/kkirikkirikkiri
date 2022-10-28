import { FC } from "react";

interface PropTypes {
  marginHorizontal?: number | string;
  marginVertical?: number | string;
  color?: string;
  height?: number;
  borderWidth?: number;
}

const VerticalLine: FC<PropTypes> = (props: PropTypes) => (
  <i
    style={{
      width: 1,
      height: props.height || "100%",
      marginTop: props.marginHorizontal,
      marginBottom: props.marginHorizontal,
      marginLeft: props.marginVertical,
      marginRight: props.marginVertical,
      borderRightWidth: props.borderWidth === undefined ? 1 : props.borderWidth,
      borderRightStyle: "solid",
      borderColor: props.color,
    }}
  />
);

export default VerticalLine;
