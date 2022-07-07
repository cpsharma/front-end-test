import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as styles from "../ui/facilityfilter.module.less";

type FacilityFilterProps = {
  hotelFacilities: string;
  selectedFacilities: string;
  className: string;
  handleFacilitiesFilter: () => {};
};
export default function FacilityFilterComponent(props): JSX.Element {
  const hotelFacilities = props.hotelFacilities;
  const selectedFacilities: string[] = props.selectedFacilities;
  return (
    <ul className={styles.tags}>
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
  );
}
