import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import styles from "../ui/filter.module.less";

export default function FilterComponent(): JSX.Element {
  const [checked, setChecked] = useState(true);
  const handleChangecheck = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={styles["grid"]}>
      <div className={styles["col"]}>
        <div className={styles["filter-container"]}>
          <label id="filter_label" className={styles["label-heading"]}>
            Filter by:
          </label>
          <div className={styles["filter-label-margin"]}>
            <label
              id="star_rating_label"
              className={styles["label-subheading"]}
            >
              Star rating
            </label>
            {ratings.map((option) => (
              <label
                className={styles["checkbox-container"]}
                key={`star${option.value}`}
              >
                {option.label}
                <input
                  type="checkbox"
                  id={option.value}
                  checked={selectedStars.includes(option.value)}
                  onChange={(e) => {
                    setSelectedStars((prev: string[]) =>
                      checkUnCheck(prev, (e.target as HTMLInputElement).id)
                    );
                  }}
                />
                <span className={styles["checkmark"]}></span>
              </label>
            ))}
          </div>
          <div className={styles["filter-label-margin"]}>
            <label
              id="person_price_label"
              className={styles["label-subheading"]}
            >
              Price per person
            </label>
            {pricePerPerson.map((option) => (
              <label
                className={styles["checkbox-container"]}
                key={`price${option.value}`}
              >
                {option.label}
                <input
                  type="checkbox"
                  id={`${option.min}-${option.max}`}
                  checked={selectedPricePerPerson.includes(
                    `${option.min}-${option.max}`
                  )}
                  onChange={(e) => {
                    setSelectedPricePerPerson((prev: string[]) =>
                      checkUnCheck(prev, (e.target as HTMLInputElement).id)
                    );
                  }}
                />
                <span className={styles["checkmark"]}></span>
              </label>
            ))}
          </div>
          <div className={styles["filter-label-margin"]}>
            <label
              id="hotel_facilities_label"
              className={styles["label-subheading"]}
            >
              Hotel facilities
            </label>
            {facilities.map((option) => (
              <label
                className={styles["checkbox-container"]}
                key={`facility${option.value}`}
              >
                {option.label}
                <input
                  type="checkbox"
                  id={option.label}
                  checked={selectedFacilities.includes(option.label)}
                  onChange={(e) => {
                    setSelectedFacilities((prev: string[]) =>
                      checkUnCheck(prev, (e.target as HTMLInputElement).id)
                    );
                  }}
                />
                <span className={styles["checkmark"]}></span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
