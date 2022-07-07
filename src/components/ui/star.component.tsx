import { h, JSX } from "preact";
import * as styles from "../ui/star.module.less";

type StarProps = {
  checked: boolean;
  key: number;
};

const StarComponent = (props: StarProps) => {
  return (
    <div className={`fa fa-star ${props.checked ? styles.checked : ""}`}></div>
  );
};

export default StarComponent;
