const scrSize = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "430px",
  mobileXL: "561px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const minBreakPoints = {
  mobileS: `(min-width: ${scrSize.mobileS})`,
  mobileM: `(min-width: ${scrSize.mobileM})`,
  mobileL: `(min-width: ${scrSize.mobileL})`,
  mobileXL: `(min-width: ${scrSize.mobileXL})`,
  tablet: `(min-width: ${scrSize.tablet})`,
  laptop: `(min-width: ${scrSize.laptop})`,
  laptopL: `(min-width: ${scrSize.laptopL})`,
  desktop: `(min-width: ${scrSize.desktop})`,
  desktopL: `(min-width: ${scrSize.desktop})`,
};

const breakpoints = {
  screenBreakpoint: scrSize,
  bp: minBreakPoints,
}

export default breakpoints;
