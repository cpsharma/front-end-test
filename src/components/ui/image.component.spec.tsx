import { h, JSX } from "preact";
import { shallow, configure, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import ImageComponent, { ImageProps } from "./image.component";

configure({ adapter: new Adapter() });

describe("Image Component", () => {
  const props: ImageProps = {
    imgUrl: "./../../assets/images/logo.svg",
    altText: "Test Image",
    fallBackUrl: "https://picsum.photos/seed/picsum/200/300",
  };
  let image_component: ShallowWrapper;
  beforeEach(() => {
    image_component = shallow(<ImageComponent {...props} />);
  });

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
