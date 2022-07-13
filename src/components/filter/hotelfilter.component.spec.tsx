import { h } from "preact";
import { mount, configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import { HolidayContext } from "../../context/holiday.context";
import HotelFilterComponent from "./hotelfilter.component";
import holidaysMock from "../../__mock__/holiday.json";
import { BookingResponse } from "../../types/booking";

configure({ adapter: new Adapter() });

describe("HotelFilter Component", () => {
  const holidaysMockObj: BookingResponse = JSON.parse(
    JSON.stringify(holidaysMock)
  );
  let hotel_filter_component;

  beforeEach(() => {
    hotel_filter_component = mount(
      <HolidayContext.Provider value={holidaysMockObj.holidays}>
        <div>
          <HotelFilterComponent />
        </div>
      </HolidayContext.Provider>
    );
  });
  afterEach(() => {
    hotel_filter_component.unmount();
  });
  it("renders properly", async () => {
    expect(hotel_filter_component).toMatchSnapshot();
  });

  it("Renders Child components `StarRatingFilterComponent, SliderComponent, FacilityFilterComponent, HotelCardComponent`", async () => {
    expect(
      hotel_filter_component.find("ul#start-rating-filter").length
    ).toEqual(1);
  });
  it("Renders Child components `StarRatingFilterComponent, SliderComponent, FacilityFilterComponent, HotelCardComponent`", async () => {
    expect(
      hotel_filter_component.find("input#price-range-filter").length
    ).toEqual(1);
  });
  it("Renders Child components `StarRatingFilterComponent, SliderComponent, FacilityFilterComponent, HotelCardComponent`", async () => {
    expect(hotel_filter_component.find("ul#facility-filter").length).toEqual(1);
  });
  it("Renders Child components `StarRatingFilterComponent, SliderComponent, FacilityFilterComponent, HotelCardComponent`", async () => {
    expect(hotel_filter_component.find("ul#facility-filter").length).toEqual(1);
  });
});
