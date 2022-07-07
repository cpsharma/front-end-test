import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as styles from "../ui/starratingfilter.module.less";
import StarComponent from "./star.component";

export default function StarRatingFilterComponent(props): JSX.Element {
  const starRatings: string[] = props.starRating;
  const selectedStarRating: string[] = props.selectedStarRating;
  return (
    <ul className={styles.tags}>
      {starRatings.map((rating) => (
        <li
          className={`${styles.tag}  ${
            selectedStarRating.includes(rating) && styles.selected
          }`}
          key={rating}
          data-star-rating={rating}
          onClick={props.handleStarRatingFilter}
        >
          {[...Array(Number(rating))].map((e, i) => (
            <StarComponent key={i} checked={true}></StarComponent>
          ))}
        </li>
      ))}
    </ul>
  );
}
