import { h } from "preact";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import TagComponent from "./tag.component";

configure({ adapter: new Adapter() });

describe("Tag Component", () => {
  it("renders properly", async () => {
    const props = {
      tags: ["Car Parking"],
    };
    const tag_component = shallow(<TagComponent {...props} />);
    expect(tag_component).toMatchSnapshot();
  });

  it("should render with `0` tags", async () => {
    const props = {
      tags: [],
    };
    const tag_component = shallow(<TagComponent {...props} />);
    expect(tag_component.find("li").length).toEqual(0);
  });
  it("should render with `Car Parking` tag", async () => {
    const props = {
      tags: ["Car Parking"],
    };
    const tag_component = shallow(<TagComponent {...props} />);
    expect(tag_component.find("li").text()).toBe("Car Parking");
  });
  it("should render 2 tags", async () => {
    const props = {
      tags: ["Car Parking", "Bar"],
    };
    const tag_component = shallow(<TagComponent {...props} />);
    expect(tag_component.find("li").length).toEqual(2);
  });
});
