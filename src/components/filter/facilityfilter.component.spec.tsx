import { h, JSX } from "preact";
import { shallow, mount, configure, ShallowWrapper, cleanup } from "enzyme";
import FacilityFilterComponent, {
  FacilityFilterProps,
} from "./facilityfilter.component";
import Adapter from "enzyme-adapter-preact-pure";
import holidaysMock from "../../__mock__/holiday.json";
import { BookingResponse, Holiday } from "../../types/booking";

configure({ adapter: new Adapter() });

describe("FacilityFilter component", () => {
  const holidaysMockObj: BookingResponse = JSON.parse(
    JSON.stringify(holidaysMock)
  );
  const props: FacilityFilterProps = {
    hotelFacilities: holidaysMockObj.holidays[0].hotel.content.hotelFacilities,
    selectedFacilities: [],
    handleFacilitiesFilter: (event: Event): void => {},
    className: "",
    label: "Refine by hotel facilities",
    id: "facility-filter",
  };
  const facility_filter_component = mount(
    <FacilityFilterComponent {...props} />
  );
  it("renders properly", async () => {
    expect(facility_filter_component).toMatchSnapshot();
  });

  it("renders correct count of facilities", async () => {
    expect(
      facility_filter_component.find("#facility-filter>li").length
    ).toEqual(props.hotelFacilities.length);
  });
});
