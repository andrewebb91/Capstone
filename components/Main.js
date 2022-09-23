import html from "html-literal";
import * as views from "./views";
export default (state) => html`
  ${views["Home"]()}, ${views["Royal PHOURtune"]()}, ${views["180 SOLEZ"]},
  ${views["The Prespective Podcast"]}, ${views["Shopping Cart"]},
  ${views["Order History"]}
`;
