import { h, JSX } from "preact";
import * as styles from "../ui/slider.module.less";

export type SliderProps = {
  type: string;
  label: string;
  min: string;
  max: string;
  value: string;
  id: string;
  className: string;
  handlePriceFilter: (event: Event) => void;
};
function SliderComponent(props: SliderProps): JSX.Element {
  return (
    <div className={styles["slide-container"]}>
      <label for={props?.id}>{props?.label}</label>
      <input
        type={props?.type}
        min={props?.min}
        max={props?.max}
        value={props?.value}
        className={styles.slider}
        id={props?.id}
        onChange={props?.handlePriceFilter}
      ></input>
      <p>
        <div>
          Min Price: <strong id="min-price">{props.min}</strong>
        </div>
        <div>
          Max Price: <strong id="max-price">{props?.value}</strong>
        </div>
      </p>
    </div>
  );
}

export default SliderComponent;
