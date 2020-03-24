import "@polymer/polymer/polymer-element.js";

const $_documentContainer = document.createElement("template");
$_documentContainer.innerHTML = `

<dom-module id="shared-styles">
<link rel="import" type="css" href="./assets/style.css">
  <template>
  <style>
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  ul {
    text-decoration: none;
    list-style: none;
  }
  @import "tailwindcss/utilities";
  </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
