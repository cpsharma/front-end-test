import { h, JSX } from "preact";
import { shallow, mount, configure, ShallowWrapper, cleanup } from "enzyme";
import HotelCardComponent from "./hotelcard.component";
import Adapter from "enzyme-adapter-preact-pure";
import holidaysMock from "../../__mock__/holiday.json";
import { BookingResponse, Holiday } from "../../types/booking";

configure({ adapter: new Adapter() });

describe("HotelCard component", () => {
  const holidaysMockObj: BookingResponse = JSON.parse(
    JSON.stringify(holidaysMock)
  );
  const props = {
    holiday: holidaysMockObj.holidays[0],
  };
  const hotel_card_component = mount(<HotelCardComponent {...props} />);
  it("renders properly", async () => {
    expect(hotel_card_component).toMatchSnapshot();
  });

  it("Renders a Hotel Card", async () => {
    expect(hotel_card_component.find(".hotel-card").length).toEqual(1);
  });
  it("Renders Hotel Name", async () => {
    expect(hotel_card_component.find(".hotel-name").text()).toEqual(
      props.holiday.hotel.name
    );
  });
});
