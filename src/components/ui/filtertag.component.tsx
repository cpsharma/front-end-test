import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as styles from "../ui/filtertag.module.less";

export default function FiltertagComponent(props): JSX.Element {
  const tags = props.tags;
  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li>
          <a href="#" className={styles.tag}>
            {tag}
          </a>
        </li>
      ))}
    </ul>
  );
}
