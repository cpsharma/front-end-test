import { h, JSX } from "preact";
import * as styles from "../ui/box.module.less";

const BoxComponent = (props) => {
  return <div className={styles.box}>{props.children}</div>;
};

export default BoxComponent;
