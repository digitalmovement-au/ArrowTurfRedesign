import type { Page } from "../types";
import { about } from "./about";
import { varietiesHub } from "./varieties";
import { sirWalter, matilda, kikuyu, wintergreen, greenlees } from "./variety-pages";
import { servicesHub, delivery } from "./services";
import { pickup, maxiRoll, maxiLaying } from "./services-2";
import { installation, projects } from "./services-3";
import { turfCare } from "./care";

/** Every templated page, keyed by its live WordPress URL so nothing changes for Google. */
export const pages: Page[] = [
  about, varietiesHub, sirWalter, matilda, kikuyu, wintergreen, greenlees,
  servicesHub, delivery, pickup, maxiRoll, maxiLaying, installation, projects, turfCare,
];
