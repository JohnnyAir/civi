export const breakpoints = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "430px",
  mobileXL: "561px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const mediaQueries = {
  mobileS: `@media screen and (min-width: ${breakpoints.mobileS})`,
  mobileM: `@media screen and (min-width: ${breakpoints.mobileM})`,
  mobileL: `@media screen and (min-width: ${breakpoints.mobileL})`,
  mobileXL: `@media screen and (min-width: ${breakpoints.mobileXL})`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
  laptop: `@media screen and (min-width: ${breakpoints.laptop})`,
  laptopL: `@media screen and (min-width: ${breakpoints.laptopL})`,
  desktop: `@media screen and (min-width: ${breakpoints.desktop})`,
  desktopL: `@media screen and (min-width: ${breakpoints.desktop})`,
};

const screenBreakpoint = {
  breakpoints,
  mediaQueries,
};

export default screenBreakpoint;
