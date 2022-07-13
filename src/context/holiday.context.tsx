import { h, JSX, createContext } from "preact";
import { prependOnceListener } from "process";
import { Holiday } from "../types/booking";

const HolidayContext = createContext<Holiday[]>([]);
export { HolidayContext };
