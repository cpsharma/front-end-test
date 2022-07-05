import { h, JSX } from "preact";
import * as styles from "../ui/box.module.less";

function BoxComponent(props): JSX.Element {
  return <div className={styles.box}>{props.children}</div>;
}

export default BoxComponent;
