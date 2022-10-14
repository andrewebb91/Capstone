import html from "html-literal";
import logo from "../../assets/IMG_0641.jpg";
import fancy from "../../assets/IMG_0642.jpg";
import crown from "../../assets/IMG_0643.jpg";
import wedding from "../../assets/IMG_4187.jpeg";

export default (state) => html`
  <section id="RPH">
    <div><img class="logo" src="${logo}" alt="logo" /></div>
    <p>
      Royal PHOURtune is a not only a clothing line but it is way of life.
      Bonded by a Brotherhood Royal PHOURtune is a space for creativity and self
      expression while understands just how PHOURtunate you are. He specialize in Tee shirts and will soon make our way into all areas of clothing.
    </p>
      <img class="clean" src="${wedding}"/>
    <div class="logos">
      <h3>Logos</h3>
    </div>
    <img class="nice" src="${fancy}" alt="nice" />
    <img class="crown" src="${crown}" alt="crown" />

    <div>
      <section id="form">
        <form action="https://formspree.io/f/xnqrpqve"  method="POST" action="">
          <h3>Order Here</h3>
          <div>
            <label for="customer">Customer:</label>
            <input
              type="text"
              name="customer"
              id="customer"
              placeholder="Name here"
              required
            />
          </div>
          </div>
            <label for="size">Size:(type out the size)
            <input
              type="text"
              name="size"
              id="id"
              placeholder="s, m, l, x-large"
              required
              />
            <div>
            </div>
            <label for="design">Design:</label>
        <input
          type="checkbox"
          id="id_of_checkbox1"
          class="items1"
          name="design"
          value="custom"
        />
        <label for="top1">logo1</label>
        <input
          type="checkbox"
          id="id_of_checkbox2"
          class="items1"
          name="design"
          value="logo1"
        />
        <label for="top2">logo2</label>
        <input
          type="checkbox"
          id="id_of_checkbox3"
          class="items1"
          name="design"
          value="logo2"
        />

        <div></div>
        <input type="submit" name="submit" value="Submit Order" />
        </form>
      </section>
    </div>
    <div></div>
  </section>
`;
