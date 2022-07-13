import { h, JSX } from "preact";
import { useEffect, useState, useContext } from "preact/hooks";
import { Holiday, BookingResponse } from "../../types/booking";
import * as styles from "./hotelfilter.module.less";
import BoxComponent from "../ui/box.component";
import HotelCardComponent from "./hotelcard.component";
import FacilityFilterComponent from "./facilityfilter.component";
import SliderComponent from "../ui/slider.component";
import StarRatingFilterComponent from "./starratingfilter.component";

import { HolidayContext } from "../../context/holiday.context";

const HotelFilterComponent = (): JSX.Element => {
  const holidays = useContext(HolidayContext);
  const [filteredHolidayData, setFilteredHolidayData] = useState<Holiday[]>([]);

  const [hotelStarRating, setHotelStarRating] = useState<string[]>([]);
  const [selectedStarRating, setSelectedStarRating] = useState<string[]>([]);

  const [pricePerPerson, setPricePerPerson] = useState<number[]>([]);
  const [selectedPricePerPerson, setSelectedPricePerPerson] =
    useState<number>(0);

  const [hotelFacilities, setHotelFacilities] = useState<string[]>([]);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);

  useEffect(() => {
    setFilteredHolidayData(holidays);
  }, []);
  useEffect(() => {
    if (holidays && holidays.length > 0) {
      const facilities: string[] = [];
      holidays &&
        holidays.forEach((hl) =>
          hl?.hotel?.content?.hotelFacilities.forEach((el) =>
            !facilities.includes(el) ? facilities.push(el) : ""
          )
        );
      setHotelFacilities(facilities.sort());

      const ratings: string[] = [];
      holidays &&
        holidays.forEach((hl) => {
          const rating: string = hl.hotel.content?.starRating;
          hl.hotel.content?.starRating &&
            !ratings.includes(rating) &&
            ratings.push(rating);
        });
      setHotelStarRating(ratings?.sort());

      const prices: number[] = [];
      holidays &&
        holidays.forEach((hl) => {
          const price: number = hl.pricePerPerson;
          hl?.pricePerPerson && !prices.includes(price) && prices.push(price);
        });
      setPricePerPerson(prices);
    }
  }, [holidays]);

  useEffect(() => {
    setFilteredHolidayData(
      holidays
        .filter((holiday) =>
          selectedStarRating.length > 0
            ? selectedStarRating.includes(
                holiday?.hotel?.content?.starRating?.toString()
              )
            : holiday
        )
        .filter((holiday) =>
          selectedPricePerPerson > 0
            ? holiday.pricePerPerson <= Number(selectedPricePerPerson)
            : holiday
        )
        .filter((holiday) =>
          selectedFacilities.length > 0
            ? selectedFacilities.every((facility) =>
                holiday?.hotel?.content.hotelFacilities.includes(facility)
              )
            : holiday
        )
    );
  }, [
    selectedStarRating,
    selectedPricePerPerson,
    selectedFacilities,
    setFilteredHolidayData,
  ]);

  const handleStarRatingFilter = (event: Event): void => {
    let rating: string;
    const target = event.target as Element;
    if (event.target !== event.currentTarget) {
      rating = target.parentElement.getAttribute("data-star-rating");
    } else {
      rating = target.getAttribute("data-star-rating");
    }
    if (selectedStarRating.includes(rating)) {
      setSelectedStarRating(selectedStarRating.filter((val) => val !== rating));
    } else {
      setSelectedStarRating([...selectedStarRating, rating]);
    }
  };

  const handlePriceFilter = (event: Event): void => {
    const target = event.target as HTMLButtonElement;
    const selectedPrice: number = Number(target.value);
    setSelectedPricePerPerson(selectedPrice);
    console.log(target.value);
  };

  const handleFacilitiesFilter = (event: Event): void => {
    const target = event.target as Element;
    let selectedFacility: string = target.innerHTML;
    if (selectedFacilities.includes(selectedFacility)) {
      setSelectedFacilities(
        selectedFacilities.filter((val) => val !== selectedFacility)
      );
    } else {
      setSelectedFacilities([...selectedFacilities, selectedFacility]);
    }
  };

  return (
    <div className={styles["filter-box"]}>
      <div className={styles["filter-container"]}>
        <div className={styles["filter-label-margin"]}>
          <StarRatingFilterComponent
            starRatings={hotelStarRating}
            selectedStarRatings={selectedStarRating}
            handleStarRatingFilter={handleStarRatingFilter}
            label="Refine by star rating"
            id="start-rating-filter"
          />
        </div>

        <div className={styles["filter-label-margin"]}>
          <SliderComponent
            min={Math.min(...pricePerPerson).toString()}
            max={Math.max(...pricePerPerson).toString()}
            value={
              selectedPricePerPerson
                ? selectedPricePerPerson.toString()
                : Math.max(...pricePerPerson).toString()
            }
            id="price-range-filter"
            handlePriceFilter={handlePriceFilter}
            label="Refine by price per person"
            className=""
            type="range"
          />
        </div>

        <div className={styles["filter-label-margin"]}>
          <div className={styles["filter-label-margin"]}>
            <FacilityFilterComponent
              hotelFacilities={hotelFacilities}
              selectedFacilities={selectedFacilities}
              handleFacilitiesFilter={handleFacilitiesFilter}
              className=""
              label=" Refine by hotel facilities"
              id="facility-filter"
            />
          </div>
        </div>
      </div>

      {
        <div className={styles["col"]}>
          <BoxComponent>
            {filteredHolidayData.map((holiday) => (
              <HotelCardComponent holiday={holiday} />
            ))}
          </BoxComponent>
        </div>
      }
    </div>
  );
};
export default HotelFilterComponent;
