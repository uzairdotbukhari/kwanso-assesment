import { COUNTRIES } from "../constants/countries.constant";

export const getNestedProperty = <T>(
  obj: INestedObject,
  key: string
): T | undefined => {
  return key.split(".").reduce((acc, part) => acc && acc[part], obj) as T;
};

export const getCountryFlag = (country: string): string => {
  const countryData = COUNTRIES.find((c) => c.name === country);
  if (countryData) {
    return countryData.flag;
  }
  return "";
};
