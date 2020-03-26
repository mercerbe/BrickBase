import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "../shared-styles.js";

class Home extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card border-solid border-4 border-gray-600">
        <h1>Home</h1>
      </div>
    `;
  }
}

window.customElements.define("app-home", Home);
