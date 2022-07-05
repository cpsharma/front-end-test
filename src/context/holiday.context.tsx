import { h, JSX, createContext } from "preact";
import { Holiday } from "../types/booking";

const HolidayContext = createContext<Holiday[]>([]);

export { HolidayContext };
