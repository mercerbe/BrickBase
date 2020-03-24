import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "../shared-styles.js";

class Mocs extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Parts</h1>
      </div>
    `;
  }
}

window.customElements.define("app-mocs", Mocs);
