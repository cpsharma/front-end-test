import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as styles from "../ui/facilityfilter.module.less";

export default function FacilityFilterComponent(props): JSX.Element {
  const tags = props.tags;
  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li className={styles.tag}>{tag}</li>
      ))}
    </ul>
  );
}
