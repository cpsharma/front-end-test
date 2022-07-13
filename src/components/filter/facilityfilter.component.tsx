import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as styles from "./facilityfilter.module.less";

export type FacilityFilterProps = {
  hotelFacilities: string[];
  selectedFacilities: string[];
  className: string;
  handleFacilitiesFilter: (event: Event) => void;
  id: string;
  label: string;
};
export default function FacilityFilterComponent(
  props: FacilityFilterProps
): JSX.Element {
  const hotelFacilities: string[] = props.hotelFacilities;
  const selectedFacilities: string[] = props.selectedFacilities;
  return (
    <div>
      <label for={props?.id}>{props?.label}</label>
      <ul className={styles.tags} id={props?.id}>
        {hotelFacilities.map((facility) => (
          <li
            className={`${styles.tag}  ${
              selectedFacilities.includes(facility) && styles.selected
            }`}
            onClick={props.handleFacilitiesFilter}
          >
            {facility}
          </li>
        ))}
      </ul>
    </div>
  );
}
