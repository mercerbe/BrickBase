import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "../shared-styles.js";

import Brickable from "../services/api";

class Colors extends PolymerElement {
  constructor() {
    super();
    colors: [];
  }
  connectedCallback() {
    console.log("connected");
    Brickable.getColors();
  }
  static get properties() {
    return {};
  }
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Colors</h1>
      </div>
    `;
  }
}

window.customElements.define("app-colors", Colors);
