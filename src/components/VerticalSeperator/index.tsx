//css
import { Hr } from "./index.styles";

type VerticalSeperatorProps = {
  height?: string;
  color?: string;
};

const VerticalSeperator = ({ height, color }: VerticalSeperatorProps) => {
  return <Hr height={height} color={color} />;
};

export default VerticalSeperator;
