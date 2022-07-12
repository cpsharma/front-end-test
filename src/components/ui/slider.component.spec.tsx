import { h } from "preact";
import { shallow, mount, configure, fireEvent } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import SliderComponent from "./slider.component";

configure({ adapter: new Adapter() });

describe("Slider Component", () => {
  const mockOnSlidingComplete = jest.fn();
  it("renders properly", async () => {
    const props = {
      min: "2000",
      max: "5000",
      value: "4000",
      id: "price-range",
      handlePriceFilter: mockOnSlidingComplete,
      label: "Refine by price per person",
      className: "",
      type: "range",
    };
    const slider_component = shallow(<SliderComponent {...props} />);
    expect(slider_component).toMatchSnapshot();
  });

  it("Max price text should render", async () => {
    const props = {
      min: "2000",
      max: "5000",
      value: "4000",
      id: "price-range",
      handlePriceFilter: mockOnSlidingComplete,
      label: "Refine by price per person",
      className: "",
      type: "range",
    };
    const slider_component = mount(<SliderComponent {...props} />);
    expect(slider_component.find("#max-price").text()).toBe("4000");
  });
  it("On Slide", async () => {
    const props = {
      min: "2000",
      max: "5000",
      value: "4000",
      id: "price-range",
      handlePriceFilter: mockOnSlidingComplete,
      label: "Refine by price per person",
      className: "",
      type: "range",
    };
    const slider_component = mount(<SliderComponent {...props} />).find(
      "input#price-range"
    );
    slider_component.getDOMNode().value = "3000";
    slider_component.simulate("change");
    expect(mockOnSlidingComplete).toHaveBeenCalled();
  });

  /*  it("should render with `0` tags", async () => {
    const props = {
      min: "2000",
      max: "5000",
      value: "4000",
      id: "priceRange",
      handlePriceFilter: (event: Event): void => {},
      label: "Refine by price per person",
      className: "",
      type: "range",
    };
    const slider_component = shallow(<SliderComponent {...props} />);
    expect(slider_component.find("li").length).toEqual(0);
  });
  it("should render with `Car Parking` tag", async () => {
    const props = {
      min: "2000",
      max: "5000",
      value: "4000",
      id: "priceRange",
      handlePriceFilter: (event: Event): void => {},
      label: "Refine by price per person",
      className: "",
      type: "range",
    };
    const slider_component = shallow(<SliderComponent {...props} />);
    expect(slider_component.find("li").text()).toBe("Car Parking");
  });
  it("should render 2 tags", async () => {
    const props = {
      min: "2000",
      max: "5000",
      value: "4000",
      id: "priceRange",
      handlePriceFilter: (event: Event): void => {},
      label: "Refine by price per person",
      className: "",
      type: "range",
    };
    const slider_component = shallow(<SliderComponent {...props} />);
    expect(slider_component.find("li").length).toEqual(2);
  }); */
});
