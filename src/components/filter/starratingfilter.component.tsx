import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as styles from "./starratingfilter.module.less";
import StarComponent from "../ui/star.component";

type StarRatingFilter = {
  starRatings: string[];
  selectedStarRatings: string[];
  handleStarRatingFilter: (event: Event) => void;
};
export default function StarRatingFilterComponent(props): JSX.Element {
  const starRatings: string[] = props.starRatings;
  const selectedStarRating: string[] = props.selectedStarRatings;
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
