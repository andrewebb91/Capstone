import html from "html-literal";
import jackets from "../../assets/IMG_2408.jpg";
import lj from "../../assets/IMG_0433.jpg";
import evolution from "../../assets/IMG_0434.jpg";
import icy from "../../assets/IMG_0435.jpg";
import barcode from "../../assets/IMG_0473.jpg";
import smile from "../../assets/IMG_0521.jpg";
import kc from "../../assets/IMG_0636.jpg";
import ron from "../../assets/IMG_0648.jpg";
import stan from "../../assets/IMG_0652.jpg";
import dre from "../../assets/IMG_0662.jpg";
import zo from "../../assets/IMG_0670.jpg";
import phi from "../../assets/IMG_0695.jpg";
import paddles from "../../assets/IMG_0703.jpg";
import look from "../../assets/IMG_1593.jpeg";
import wedding from "../../assets/IMG_4187.jpeg";
import background from "../../assets/6D30D9F9-7D78-446C-A38D-CBB747494404.jpg";
export default (state) => html`
  <section id="home">
    <h2 id="Hometitle">Who We Are!</h2>
    <div class="slide">
      <img id="slideImage" src="${state.currentSlide}" />
    </div>
    <!--
      <div class="carousel">
        <div class="img-container">
          <img class="slide" src="${jackets}" />
        </div>
        <div class="img-container">
          <img class="slide" src="${dre}" />
        </div>
        <div class="img-container">
          <img class="slide" src="${lj}" />
        </div class="img-container">
        <img src="${ron}"/>
      </div>
        <div class="img-container">
          <img src="${smile}"/>
        </div>
        <div class="img-container">
          <img src="${stan}"/>
        </div>
        <div class="img-container">
          <img src="${wedding}"/>
        </div>
        <div class="img-container">
          <img src="${zo}"/>
        </div>
      <div class="img-container">
        <img src="${paddles}" />
      </div> -->

    <div></div>

    <p>
      Your on stop shop to get what you need for a night on a town. Join the
      team buy purchasing a shirt from the ROYAL PHOURtune band, a Shoe Cleaning
      service 180 SOLEZ, and a chance to listen and explore our partnering
      Podcast The Perspective Project as well. Please take the time to explore
      all of our services so that we can provide you the best experience.
    </p>
  </section>
`;
