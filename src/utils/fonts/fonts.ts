import localFont from "next/font/local";

const clashDisplay = localFont({
  src: [
    {
      path: "../../assets/fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../assets/fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});
const unicaOne = localFont({
  src: [
    {
      path: "../../assets/fonts/unicaOne/UnicaOne-Regular.ttf",
      weight: "200",
      style: "normal",
    },
  ],
});
export { clashDisplay, unicaOne };
