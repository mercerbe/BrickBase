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
        <div class="circle">1</div>
        <h1>Home</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p class="text-xl">
          Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit
          elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi
          periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo
          eripuit sit.
        </p>
      </div>
    `;
  }
}

window.customElements.define("app-home", Home);
