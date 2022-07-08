import { h, JSX } from "preact";
import * as styles from "../ui/box.module.less";

type BoxProps = {
  children: JSX.Element;
};
function BoxComponent(props): JSX.Element {
  return <div className={styles.box}>{props.children}</div>;
}

export default BoxComponent;
