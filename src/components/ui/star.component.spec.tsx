import { h } from "preact";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import StarComponent from "./star.component";

configure({ adapter: new Adapter() });

describe("Star Component", () => {
  it("renders properly", () => {
    const star_component = shallow(<StarComponent />);
    expect(star_component).toMatchSnapshot();
  });

  it("should render with `fa-star` class name", async () => {
    const star_component = shallow(<StarComponent />);
    expect(star_component.find(".fa-star").length).toBe(1);
  });
});
