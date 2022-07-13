import { h, JSX } from "preact";
import * as styles from "../ui/star.module.less";

const StarComponent = () => {
  return <div className={`fa fa-star ${styles.checked} `}></div>;
};

export default StarComponent;
