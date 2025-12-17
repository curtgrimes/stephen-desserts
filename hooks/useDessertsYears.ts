import desserts from "data/desserts";

export const useDessertsYears = () => Object.keys(desserts.years).map(year => Number(year));