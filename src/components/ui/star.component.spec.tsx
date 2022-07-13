import { h } from "preact";
import { shallow, mount, configure, ShallowWrapper, cleanup } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import StarComponent from "./star.component";

configure({ adapter: new Adapter() });

describe("Star Component", () => {
  let star_component: ShallowWrapper;
  beforeEach(() => {
    star_component = shallow(<StarComponent />);
  });
  afterEach(() => cleanup);
  it("renders properly", () => {
    expect(star_component).toMatchSnapshot();
  });

  it("should render with `fa-star` class name", async () => {
    expect(star_component.find(".fa-star").length).toBe(1);
  });
});
