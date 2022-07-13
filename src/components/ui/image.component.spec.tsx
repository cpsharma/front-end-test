import { h, JSX } from "preact";
import { shallow, mount, configure, ShallowWrapper, cleanup } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import ImageComponent from "./image.component";
//import logoImage from "./../../assets/images/logo.svg";

configure({ adapter: new Adapter() });

describe("Image Component", () => {
  let image_component: ShallowWrapper;
  const props = {
    imgUrl: "./../../assets/images/logo.svg",
    altText: "Test Image",
    fallBackUrl: "https://picsum.photos/seed/picsum/200/300",
  };
  beforeEach(() => {
    image_component = shallow(<ImageComponent {...props} />);
  });
  afterEach(() => cleanup);

  it("renders properly", async () => {
    expect(image_component).toMatchSnapshot();
  });

  it("renders an image", async () => {
    expect(image_component.find("img").prop("src")).toEqual(props.imgUrl);
  });
  it("renders an alt text", async () => {
    expect(image_component.find("img").prop("alt")).toEqual(props.altText);
  });
  it("renders fallback image", async () => {
    const props = {
      imgUrl: "",
      altText: "Test Image",
      fallBackUrl: "https://picsum.photos/seed/picsum/200/300",
    };
    image_component = shallow(<ImageComponent {...props} />);
    expect(image_component.find("img").prop("src")).toEqual(props.fallBackUrl);
  });
});
