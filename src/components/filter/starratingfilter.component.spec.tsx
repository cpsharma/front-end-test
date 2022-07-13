import { h } from "preact";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import StarRatingFilterComponent, {
  StarRatingFilterProps,
} from "./starratingfilter.component";

configure({ adapter: new Adapter() });

describe("StarRatingFilter Component", () => {
  const props: StarRatingFilterProps = {
    starRatings: ["3", "4", "5"],
    selectedStarRatings: [],
    handleStarRatingFilter: (event: Event): void => {},
    label: "Start Rating Filter",
    id: "star-rating-filter",
  };
  const star_rating_component = mount(<StarRatingFilterComponent {...props} />);

  it("renders properly", () => {
    expect(star_rating_component).toMatchSnapshot();
  });

  it("should render star filters", async () => {
    expect(star_rating_component.find("li").length).toBe(3);
  });

  it("should render correct stars", async () => {
    expect(star_rating_component.find("li").at(0).find(".fa-star").length).toBe(
      Number(props.starRatings[0])
    );
    expect(star_rating_component.find("li").at(1).find(".fa-star").length).toBe(
      Number(props.starRatings[1])
    );
    expect(star_rating_component.find("li").at(2).find(".fa-star").length).toBe(
      Number(props.starRatings[2])
    );
  });

  it("should select star filters", async () => {
    const props = {
      starRatings: ["3", "4", "5"],
      selectedStarRatings: ["3"],
      handleStarRatingFilter: (event: Event): void => {},
      label: "Start Rating Filter",
      id: "star-rating-filter",
    };
    const star_rating_component = mount(
      <StarRatingFilterComponent {...props} />
    );
    expect(star_rating_component.find("li").at(0).find(".fa-star").length).toBe(
      Number(props.starRatings[0])
    );
  });
});
