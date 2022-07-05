import { h, JSX } from "preact";
import * as styles from "../ui/star.module.less";

type StarProps = {
  checked: boolean;
};
const StarComponent = (props: ImageProps) => {
  return (
    <span
      className={`fa fa-star ${props.checked ? styles.checked : ""}`}
    ></span>
  );
};

export default StarComponent;
