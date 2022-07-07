import { h, JSX } from "preact";
import * as styles from "../ui/hotelcard.module.less";
import ImageComponent from "./image.component";
import StarComponent from "./star.component";
import TagComponent from "./tag.component";

type SelectProps = {
  label: string;
  name: string;
  id: string;
  options: Option[];
  value: string;
  required?: boolean;
};
function HotelCardComponent(props): JSX.Element {
  //console.log(props.holiday.hotel.content);
  return (
    <div className={styles.card}>
      <ImageComponent
        imgUrl={props.holiday.hotel.content.images[0].MOBILE_MAIN.url}
        altText={props.holiday.hotel.name}
        fallBackUrl={props.holiday.hotel.content.images[0].MOBILE_MAIN.url}
      ></ImageComponent>
      <div className={styles.starrating}>
        <span className={styles.star}>
          {props.holiday.hotel.content?.starRating &&
            [...Array(Number(props.holiday.hotel.content.starRating))].map(
              (e, i) => <StarComponent key={i} checked={true}></StarComponent>
            )}
        </span>
        <span className={styles.price}>
          £{props.holiday.pricePerPerson}/person
        </span>
      </div>
      <div className={styles.name}>{props.holiday.hotel.name}</div>

      <div className={styles.description}>
        {props.holiday.hotel.content?.hotelDescription &&
          props.holiday.hotel.content.hotelDescription.slice(0, 100) + "..."}
      </div>
      <div>
        <TagComponent tags={props.holiday.hotel.content.hotelFacilities} />
      </div>
    </div>
  );
}

export default HotelCardComponent;
