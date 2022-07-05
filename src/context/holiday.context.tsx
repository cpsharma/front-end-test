import { h, JSX, createContext } from "preact";
import { Holiday } from "../types/booking";

const { Provider: HolidayContextProvider, Consumer: HolidayContextConsumer } =
  createContext<Holiday[]>([]);

export { HolidayContextProvider, HolidayContextConsumer };
