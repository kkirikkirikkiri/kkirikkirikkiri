import { FC } from "react";

interface PropTypes {
  width: number | string;
}

const VerticalBlank: FC<PropTypes> = (props) => {
  return <div style={{ marginLeft: props.width }} />;
};

export default VerticalBlank;
