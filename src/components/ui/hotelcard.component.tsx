import { h, JSX } from "preact";
import * as styles from "../ui/hotelcard.module.less";
import ImageComponent from "./image.component";
import StarComponent from "./star.component";
import TagComponent from "./tag.component";
import { Holiday } from "../../types/booking";

type HotelCardProps = {
  holiday: Holiday;
};
function HotelCardComponent(props: HotelCardProps): JSX.Element {
  const holiday: Holiday = props.holiday;
  return (
    <div className={styles.card}>
      <ImageComponent
        imgUrl={holiday.hotel.content.images[0].RESULTS_CAROUSEL.url}
        altText={holiday.hotel.name}
        fallBackUrl={holiday.hotel.content.images[0].RESULTS_CAROUSEL.url}
      ></ImageComponent>
      <div className={styles["star-rating"]}>
        <div className={styles.star}>
          {holiday.hotel.content?.starRating &&
            [...Array(Number(holiday.hotel.content.starRating))].map((e, i) => (
              <StarComponent key={i} checked={true}></StarComponent>
            ))}
        </div>
        <div className={styles.price}>£{holiday.pricePerPerson}/person</div>
      </div>
      <div className={styles.name}>{holiday.hotel.name}</div>

      <div className={styles.description}>
        {holiday.hotel.content?.hotelDescription &&
          holiday.hotel.content.hotelDescription.slice(0, 100) + "..."}
      </div>
      <div>
        <TagComponent tags={holiday.hotel.content.hotelFacilities} />
      </div>
    </div>
  );
}

export default HotelCardComponent;
