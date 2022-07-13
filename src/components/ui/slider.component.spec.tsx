import { h, JSX } from "preact";
import { shallow, mount, configure, ShallowWrapper, cleanup } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import SliderComponent from "./slider.component";

configure({ adapter: new Adapter() });

describe("Slider Component", () => {
  const mockOnSlidingComplete = jest.fn();
  let slider_component: ShallowWrapper;
  beforeEach(() => {
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
    slider_component = shallow(<SliderComponent {...props} />);
  });
  afterEach(() => cleanup);

  it("renders properly", async () => {
    expect(slider_component).toMatchSnapshot();
  });

  it("Max price text should render", async () => {
    expect(slider_component.find("#max-price").text()).toBe("4000");
  });

  it("Min price text should render", async () => {
    expect(slider_component.find("#min-price").text()).toBe("2000");
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
});
