import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "../shared-styles.js";

import Brickable from "../services/api";

class Colors extends PolymerElement {
  static get properties() {
    return {};
  }
  constructor() {
    super();
    this.params = {};
    this.colors = [];
  }
  async connectedCallback() {
    this.colors = await Brickable.getColors();
    console.log(this.colors);
  }
  static get template() {
    if (this.colors) {
      return html`
        <style include="shared-styles">
          :host {
            display: block;

            padding: 10px;
          }
        </style>

        <div class="card">
          <h1>Colors</h1>
          <div>[[colors]]</div>
        </div>
      `;
    } else {
      return html`
        <div>loading...</div>
      `;
    }
  }
}

window.customElements.define("app-colors", Colors);
