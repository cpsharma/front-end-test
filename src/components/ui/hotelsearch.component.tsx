import { h } from "preact";
import { useEffect, useState, useContext } from "preact/hooks";
import { Holiday, BookingResponse } from "../../types/booking";
import { ratings, pricePerPerson, facilities } from "../../consts/searchResult";
import * as styles from "./hotelsearch.module.less";
import { checkUnCheck, filterBy } from "../../utils";
import BoxComponent from "../ui/box.component";
import HotelCardComponent from "./hotelcard.component";
import TagComponent from "./tag.component";
import SliderComponent from "./slider.component";
import { HolidayContext } from "../../context/holiday.context";

function HotelSearchComponent() {
  const holidays = useContext(HolidayContext);
  const holidayData: Holiday[] = holidays;

  const [hotelStarRating, setHotelStarRating] = useState<string[]>([]);
  const [selectedStarRating, setSelectedStarRating] = useState<string[]>([]);

  const [pricePerPerson, setPricePerPerson] = useState<number[]>([]);
  const [selectedpricePerPerson, setSelectedpricePerPerson] = useState<
    string[]
  >([]);

  const [hotelFacilities, setHotelFacilities] = useState<string[]>([]);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);

  useEffect(() => {
    if (holidays && holidays.length > 0) {
      const facilities: string[] = [];
      holidays &&
        holidays.forEach((hl) =>
          hl?.hotel?.content?.hotelFacilities.forEach((el) =>
            !facilities.includes(el) ? facilities.push(el) : ""
          )
        );
      setHotelFacilities(facilities);

      const ratings: string[] = [];
      holidays &&
        holidays.forEach((hl) => {
          const rating: string = hl?.hotel?.content?.starRating;
          hl?.hotel?.content?.starRating &&
            !ratings.includes(rating) &&
            ratings.push(rating);
        });
      setHotelStarRating(ratings);

      const prices: number[] = [];
      holidays &&
        holidays.forEach((hl) => {
          const price: number = hl.pricePerPerson;
          hl?.pricePerPerson && !prices.includes(price) && prices.push(price);
        });
      setPricePerPerson(prices);
    }
  }, [holidays]);

  return (
    <div className={styles["grid-box"]}>
      <div className={styles["filter-container"]}>
        <label id="filter_label" className={styles["label-heading"]}>
          Filter by:
        </label>

        <div className={styles["filter-label-margin"]}>
          <label id="star_rating_label" className={styles["label-subheading"]}>
            Star rating
          </label>
          <div className={styles["filter-label-margin"]}>
            <TagComponent tags={hotelStarRating} />
          </div>
        </div>

        <div className={styles["filter-label-margin"]}>
          <label id="star_rating_label" className={styles["label-subheading"]}>
            Price per person
          </label>
          <div className={styles["filter-label-margin"]}>
            <SliderComponent tags={pricePerPerson} />
          </div>
        </div>

        <div className={styles["filter-label-margin"]}>
          <label
            id="hotel_facilities_label"
            className={styles["label-subheading"]}
          >
            Hotel facilities
          </label>
          <div className={styles["filter-label-margin"]}>
            <TagComponent tags={hotelFacilities} />
          </div>
        </div>
      </div>

      {
        <div className={styles["col"]}>
          <BoxComponent>
            {holidayData.map((holiday) => {
              return (
                <HotelCardComponent holiday={holiday}></HotelCardComponent>
              );
            })}
          </BoxComponent>
        </div>
        /* <div className={styles["col"]}>
        {filteredHotelDetails.length > 0 ? (
          <div>
            {" "}
            {filteredHotelDetails.map((hotelData: Holiday, id: number) => (
              <div className={styles["grid-hotel-details"]} id="" key={id}>
                <div className={styles["col"]}>
                  <img
                    id={`hotel_image_${id}`}
                    src={
                      hotelData?.hotel?.content?.images[0]?.RESULTS_CAROUSEL
                        ?.url
                    }
                    alt="hotel"
                    width="350"
                    height="350"
                    className="rounded"
                  />
                </div>
                <div className={styles["col"]}>
                  <label
                    id={`hotel_name_${id}`}
                    className={styles["label-heading"]}
                  >
                    {hotelData?.hotel?.name}
                  </label>
                  <label
                    id={`hotel_price_${id}`}
                    className={styles["label-heading"]}
                  >
                    £{hotelData?.pricePerPerson}
                  </label>
                  <div
                    id={`hotel_description_${id}`}
                    className={styles["label-subheading"]}
                  >
                    
                    {hotelData?.hotel?.content?.hotelDescription.slice(0, 350) +
                      "..."}
                  </div>
                </div>
                <div className={styles["col"]}>
                  <div className={styles["grid-hotel-details"]}>
                    <div className={styles["col"]}>
                      <img
                        src={hotelData?.hotel?.tripAdvisor?.ratingImageUrl}
                        alt="ratings"
                      />
                    </div>
                    <div className={styles["col"]}>
                      <label
                        id="rating_label"
                        className={styles["ratings-text"]}
                      >
                        Rating
                      </label>
                      <div
                        id={`hotel_rating_${id}`}
                        className={styles["ratings-text"]}
                      >
                        {hotelData?.hotel?.content?.starRating
                          ? hotelData?.hotel.content.starRating
                          : 0}
                      </div>
                    </div>
                    <div className={styles["col"]}>
                      <label
                        id="review_label"
                        className={styles["reviews-text"]}
                      >
                        Reviews
                      </label>
                      <div
                        id={`hotel_review_${id}`}
                        className={styles["reviews-text"]}
                      >
                        {hotelData?.hotel?.tripAdvisor?.numReviews
                          ? hotelData?.hotel.tripAdvisor.numReviews
                          : 0}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <label id="no_result_found" className={styles["error"]}>
            No result found!
          </label>
        )}
      </div> */
      }
    </div>
  );
}
export default HotelSearchComponent;
