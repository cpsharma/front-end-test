import { h, JSX } from "preact";
import * as styles from "../ui/star.module.less";

type StarProps = {
  checked: boolean;
};

const StarComponent = () => {
  return <div className={`fa fa-star ${styles.checked} `}></div>;
};

export default StarComponent;
