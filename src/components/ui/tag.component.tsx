import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as styles from "../ui/tag.module.less";

export default function TagComponent(props): JSX.Element {
  const tags = props.tags;
  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li className={styles.tag}>{tag}</li>
      ))}
    </ul>
  );
}
