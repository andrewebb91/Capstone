import html from "html-literal";
export default (state) => html`
  <div>
    <form action="https://formspree.io/f/xnqrpqve" method="POST">
      <label>
        UserName:
        <input type="name here" name="name here" />
        Password
        <input type="password" name="password" />
      </label>
      <label>
        Your message:
        <textarea name="message"></textarea>
      </label>
      <!-- your other form fields go here -->
      <button type="submit">Send</button>
    </form>
  </div>
`;
