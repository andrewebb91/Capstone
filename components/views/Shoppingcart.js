import html from "html-literal";
export default (state) => html` <>
  <p id="SC">Shopping Cart</p>
  <div>Place items here</div>
  <p class="PI">Payment Information</p>
  <form action="https://formspree.io/f/xnqrpqve" method="POST">
    <label>
      UserName:
      <input type="name here" name="name here" />

      <div>
      Password
      <input type="password" name="password" />
      </div>
    </label>


    <!-- your other form fields go here -->
    <button type="submit">Send</button>
  </form>
  <p class="SA">Shipping Address</p>
  <form action="https://formspree.io/f/xnqrpqve" method="POST">
    <label>
      Full Name:
      <input type="name here" name="name here" />
      Country
      <input type="country" name="country" />
      Street Address
      <input type="address" name="address"/>
      Apt/Unit/Etc
      <input type="unit" name="unit"/>
      Zip Code
      <input type="text" name="zip" />
      City
      <input type='city' name='city'/>
      State
      <select type='state' name='state'/>
    </label>
    <button type="submit">Send</button>
  </form>
  <div></div>
  <p class="BA">Billing Address</p>
  <form action="https://formspree.io/f/xnqrpqve" method="POST">
      Full Name:
      <input type="name here" name="name here" />
      Country
      <input type="country" name="country" />
      Street Address
      <input type="address" name="address"/>
      Apt/Unit/Etc
      <input type="unit" name="unit"/>
      Zip Code
      <input type="text" name="zip" />
      City
      <input type='city' name='city'/>
      State
      <select type='state' name='state'/>
    </label>
    <!-- your other form fields go here -->
    <button type="submit">Thank you</button>
    </form>



</section>`;
