import html from "html-literal";
import black from "../../assets/277346500_10227334101160349_5368231525197130738_n.jpeg";
import priceList from "../../assets/277349911_10227334101200350_8318324104291933518_n.jpeg";
import shoes from "../../assets/277814312_10217675942288699_6258957594788902904_n.jpeg";
export default (state) => html`
  <section>
    <div>
      <img class="solez" src="${black}" alt="Perspective Podcast" />
    </div>
    <p class="shoesp">
      Understanding we live in a fast pace world and it is only getting faster.
      We decided to step into the shoe game by providing restoration and
      cleaning services. We truly do believe the shoes are a part of the "fit"
      and should not be left out! Take a look at our service and let us clean up
      your shoes for you!
      <img class="shoes" src="${shoes}" />
    </p>
  </section>
  <div>
    <img class="pricelist" src="${priceList}" />
    <p class="IG">
      <a href="https://www.instagram.com/180solez"
        >If interested in these services follow us on IG!!!</a
      >
    </p>
  </div>
`;
