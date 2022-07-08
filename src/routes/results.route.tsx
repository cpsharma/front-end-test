import { h, JSX, Fragment } from "preact";
import { useRouter } from "preact-router";
import { useEffect, useState, useContext } from "preact/hooks";
import SearchComponent from "../components/search.component";
import { doRequest } from "../services/http.service";
import { BookingRequest, BookingResponse, Holiday } from "../types/booking";
import { DateTime } from "luxon";
import { HolidayContext } from "../context/holiday.context";
import HotelFilterComponent from "../components/filter/hotelfilter.component";

export default function ResultsRoute(): JSX.Element {
  const [searchParams] = useRouter();
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const departureDate = DateTime.fromFormat(
      searchParams?.matches?.departureDate,
      "yyyy-MM-dd"
    ).toFormat("dd-MM-yyyy");
    const requestBody: BookingRequest = {
      bookingType: "holiday",
      location: searchParams?.matches?.location,
      departureDate: departureDate,
      duration: searchParams?.matches?.duration as unknown as number,
      gateway: "LHR",
      partyCompositions: [
        {
          adults: searchParams?.matches?.adults as unknown as number,
          childAges: [],
          infants: 0,
        },
      ],
    };
    try {
      setIsLoading(true);
      setError(null);
      doRequest("POST", "/cjs-search-api/search", requestBody).then(
        (response: unknown | BookingResponse) => {
          const holidays: Holiday[] = response.holidays;
          setHolidays(
            holidays.sort((a, b) => a.pricePerPerson - b.pricePerPerson)
          );
          setIsLoading(false);
        }
      );
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }, [searchParams]);
  let renderingContents: JSX.Element = <p>Found no holidays.</p>;
  if (holidays.length > 0) {
    renderingContents = (
      <HolidayContext.Provider value={holidays}>
        <div>
          <HotelFilterComponent />
        </div>
      </HolidayContext.Provider>
    );
  }

  if (error) {
    renderingContents = <p>{error}</p>;
  }

  if (isLoading) {
    renderingContents = <p>Loading...</p>;
  }
  return (
    <div>
      <SearchComponent />
      {renderingContents}
    </div>
  );
}
