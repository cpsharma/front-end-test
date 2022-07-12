import { h } from "preact";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import StarComponent from "./star.component";

configure({ adapter: new Adapter() });

describe("Star Component", () => {
  it("renders properly", () => {
    const props = {
      checked: false,
    };
    const star_component = shallow(<StarComponent {...props} />);
    expect(star_component).toMatchSnapshot();
  });

  it("should render without `checked` star", async () => {
    const props = {
      checked: false,
    };
    const star_component = shallow(<StarComponent {...props} />);
    expect(star_component.find(".checked").length).toEqual(0);
  });

  it("should render with `checked` star", async () => {
    const props = {
      checked: true,
    };
    const star_component = shallow(<StarComponent {...props} />);
    expect(star_component.find(".fa-star.checked").length).toBe(1);
  });
  /*  it("should render with `Car Parking` tag", async () => {
    const props = {
      checked: false,
    };
    const tag_component = shallow(<StarComponent {...props} />);
    expect(tag_component.find("li").text()).toBe("Car Parking");
  });
  it("should render 2 tags", async () => {
    const props = {
      checked: false,
    };
    const tag_component = shallow(<StarComponent {...props} />);
    expect(tag_component.find("li").length).toEqual(2);
  }); */
});
