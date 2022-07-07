import { h } from "preact";
import { useEffect, useState, useContext } from "preact/hooks";
import { route } from "preact-router";
import { Holiday, BookingResponse } from "../../types/booking";
import * as styles from "../ui/hotelsearch.module.less";
import BoxComponent from "../ui/box.component";
import HotelCardComponent from "./hotelcard.component";
import FacilityFilterComponent from "./facilityfilter.component";
import SliderComponent from "./slider.component";
import StarComponent from "./star.component";
import StarRatingFilterComponent from "./starratingfilter.component";

import { HolidayContext } from "../../context/holiday.context";

function HotelSearchComponent() {
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

      const ratings: string[] | number[] = [];
      holidays &&
        holidays.forEach((hl) => {
          const rating: string | number = hl?.hotel?.content?.starRating;
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

  function handleStarRatingFilter(event: Event) {
    let rating: string;
    if (event.target !== event.currentTarget) {
      rating = event.target.parentElement.getAttribute("data-star-rating");
    } else {
      rating = event.target.getAttribute("data-star-rating");
    }
    if (selectedStarRating.includes(rating)) {
      setSelectedStarRating(selectedStarRating.filter((val) => val !== rating));
    } else {
      setSelectedStarRating([...selectedStarRating, rating]);
    }
  }

  function handlePriceFilter(event: Event) {
    const selectedPrice: number = Number(event.target.value);
    setSelectedPricePerPerson(selectedPrice);
  }

  function handleFacilitiesFilter(event: Event) {
    let selectedFacility: string = event.target.innerHTML;
    if (selectedFacilities.includes(selectedFacility)) {
      setSelectedFacilities(
        selectedFacilities.filter((val) => val !== selectedFacility)
      );
    } else {
      setSelectedFacilities([...selectedFacilities, selectedFacility]);
    }
  }

  return (
    <div className={styles["filter-box"]}>
      <div className={styles["filter-container"]}>
        <div className={styles["label-heading"]}>Refine by star rating</div>

        <div className={styles["filter-label-margin"]}>
          <StarRatingFilterComponent
            starRating={hotelStarRating}
            selectedStarRating={selectedStarRating}
            handleStarRatingFilter={handleStarRatingFilter}
          />
        </div>

        <div className={styles["filter-label-margin"]}>
          <div className={styles["label-heading"]}>
            Refine by price per person
          </div>

          <SliderComponent
            min={Math.min(...pricePerPerson).toString()}
            max={Math.max(...pricePerPerson).toString()}
            value={
              selectedPricePerPerson
                ? selectedPricePerPerson
                : Math.max(...pricePerPerson).toString()
            }
            id="priceRange"
            handlePriceFilter={handlePriceFilter}
          />
        </div>

        <div className={styles["filter-label-margin"]}>
          <div className={styles["label-heading"]}>
            Refine by hotel facilities
          </div>
          <div className={styles["filter-label-margin"]}>
            <FacilityFilterComponent
              hotelFacilities={hotelFacilities}
              selectedFacilities={selectedFacilities}
              handleFacilitiesFilter={handleFacilitiesFilter}
            />
          </div>
        </div>
      </div>

      {
        <div className={styles["col"]}>
          <BoxComponent>
            {filteredHolidayData.map((holiday) => {
              return (
                <HotelCardComponent holiday={holiday}></HotelCardComponent>
              );
            })}
          </BoxComponent>
        </div>
      }
    </div>
  );
}
export default HotelSearchComponent;
