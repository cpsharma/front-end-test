import { h, JSX } from "preact";
import * as styles from "../ui/slider.module.less";

type SliderProps = {
  type: string;
  name: string;
  min: string;
  max: string;
  value: string;
  id: string;
  className: string;
  handlePriceFilter: () => {};
};
function SliderComponent(props: SliderProps): JSX.Element {
  return (
    <div className={styles.slidecontainer}>
      <p>
        <div id="maxPrice">
          Min Price: <strong>{props.min}</strong>
        </div>
      </p>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        className={styles.slider}
        id={props.id}
        onChange={props.handlePriceFilter}
      ></input>
      <p>
        <div id="maxPrice">
          Max Price: <strong>{props.value}</strong>
        </div>
      </p>
    </div>
  );
}

export default SliderComponent;
