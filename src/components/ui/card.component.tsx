import { h, JSX } from "preact";
import * as styles from "../ui/card.module.less";
import ImageComponent from "../ui/image.component";
import StarComponent from "../ui/star.component";

const HotelCardComponent = (props) => {
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
    </div>
  );
};

export default HotelCardComponent;
