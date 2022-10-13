import html from "html-literal";
import logo from "../../assets/IMG_0641.jpg";
import fancy from "../../assets/IMG_0642.jpg";
import crown from "../../assets/IMG_0643.jpg";
export default (state) => html`
  <section id="RPH">
    <div><img class="logo" src="${logo}" alt="logo" /></div>
    <p>
      Royal PHOURtune is a not only a clothing line but it is way of life.
      Bonded by a Brotherhood Royal PHOURtune is a space for creativity and self
      expression while understands just how PHOURtunate you are.
    </p>
    <div class="logos">
      <h3>Logos</h3>
    </div>
    <img class="nice" src="${fancy}" alt="nice" />
    <img class="crown" src="${crown}" alt="crown" />
  </section>
`;
