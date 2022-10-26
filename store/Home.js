import * as slideImgs from "../assets/slide";
export default {
  header: "My Home Page",
  view: "Home",
  slides: Object.values(slideImgs),
  currentSlide: "",
  index: 0, // Start from the first slide
  transition: 3000, // Wait 3 seconds
};
