import { h, JSX } from "preact";
import * as styles from "../ui/slider.module.less";

function SliderComponent(props): JSX.Element {
  //console.log(props.holiday.hotel.content);
  return (
    <div className={styles.slidecontainer}>
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        className={styles.slider}
        id="myRange"
      ></input>
    </div>
  );
}

export default SliderComponent;
