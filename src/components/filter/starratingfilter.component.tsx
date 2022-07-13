import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as styles from "./starratingfilter.module.less";
import StarComponent from "../ui/star.component";

export type StarRatingFilterProps = {
  starRatings: string[];
  selectedStarRatings: string[];
  handleStarRatingFilter: (event: Event) => void;
  label: string;
  id: string;
};
export default function StarRatingFilterComponent(
  props: StarRatingFilterProps
): JSX.Element {
  const starRatings: string[] = props.starRatings;
  const selectedStarRating: string[] = props.selectedStarRatings;
  return (
    <div>
      <label for={props?.id}>{props?.label}</label>
      <ul className={styles.tags} id={props?.id}>
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
              <StarComponent key={i}></StarComponent>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
