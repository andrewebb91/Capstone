import {Header, Nav, Main, Footer} from "./components";
import * as store from "./store";
import Navigo from "navigo";
import {capitalize} from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;

  afterRender(state);
  router.updatePageLinks();
}

function changeImg() {
  store.Home.currentSlide = store.Home.slides[store.Home.index];

  const imgSrc = document.getElementById("slideImage");
  imgSrc.src = store.Home.currentSlide;

  if (store.Home.index < store.Home.slides.length - 1) {
    store.Home.index++;
  } else {
    store.Home.index = 0;
  }

  setTimeout(changeImg, store.Home.transition);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
  if (state.view === "Royalphourtune") {
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();

      const inputOrder = event.target.elements;
      console.log("orderReceived", inputOrder);

      const requestData = {
        customer: inputOrder.customer.value,
        size: inputOrder.size.value,
        design: inputOrder.design.value,
      };
      console.log(requestData, "requestData");

      axios
        .post(`${process.env.LIFER_API}/tops`, requestData)
        .then(console.log("I posted"))
        .catch((error) => {
          console.log("error", error);
        });
    });
  }
  if (state.view === "Home") {
    console.log("fix me");
    changeImg();
  }
}
//fading slideshow
// const images = ["../../assets/IMG_0433.jpg", "../../assets/IMG_0662.jpg"];

// const carousel = document.querySelector(".carousel");

// const interval = setInterval(function () {
//   startCarousel();
// }, 3000);
// let index = 1;

// startslides = () => {
//   carousel.style.backgroundImage = `$(images[index++])`;
//   carousel.classList.remove("fade");
//   void carousel.offsetWidth;
//   carousel.classList.add("fade");
//   if (index > images.length - 1) index = 0;
// };

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Royalphourtune":
        axios.get(`${process.env.LIFER_API}/tops`).then((response) => {
          store.Royalphourtune.tableData = response.data;
          done();
        });
        break;
      default:
        done();
    }
  },
});

router
  .on({
    "/": () => render(),
    ":view": (params) => {
      let view = capitalize(params.data.view);
      render(store[view]);
    },
  })
  .resolve();
