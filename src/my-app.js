import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import {
  setPassiveTouchGestures,
  setRootPath
} from "@polymer/polymer/lib/utils/settings.js";
import "@polymer/app-layout/app-drawer/app-drawer.js";
import "@polymer/app-layout/app-drawer-layout/app-drawer-layout.js";
import "@polymer/app-layout/app-header/app-header.js";
import "@polymer/app-layout/app-header-layout/app-header-layout.js";
import "@polymer/app-layout/app-scroll-effects/app-scroll-effects.js";
import "@polymer/app-layout/app-toolbar/app-toolbar.js";
import "@polymer/app-route/app-location.js";
import "@polymer/app-route/app-route.js";
import "@polymer/iron-pages/iron-pages.js";
import "@polymer/iron-selector/iron-selector.js";
import "@polymer/paper-icon-button/paper-icon-button.js";
import "./components/my-icons.js";

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background: #ff4b1f; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #ff9068,
            #ff4b1f
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #ff9068,
            #ff4b1f
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route
        route="{{route}}"
        pattern="[[rootPath]]:page"
        data="{{routeData}}"
        tail="{{subroute}}"
      >
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>Menu</app-toolbar>
          <iron-selector
            selected="[[page]]"
            attr-for-selected="name"
            class="drawer-list"
            role="navigation"
          >
            <a name="home" href="[[rootPath]]home">Home</a>
            <a name="colors" href="[[rootPath]]colors">Colors</a>
            <a name="mocs" href="[[rootPath]]mocs">Mocs</a>
            <a name="parts" href="[[rootPath]]parts">Parts</a>
            <a name="sets" href="[[rootPath]]sets">Sets</a>
            <a name="themes" href="[[rootPath]]themes">Themes</a>
          </iron-selector>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">
          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <paper-icon-button
                icon="my-icons:menu"
                drawer-toggle=""
              ></paper-icon-button>
              <div main-title="">BrickBase</div>
            </app-toolbar>
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <app-home name="home"></app-home>
            <app-colors name="colors"></app-colors>
            <app-mocs name="mocs"></app-mocs>
            <app-parts name="parts"></app-parts>
            <app-sets name="sets"></app-sets>
            <app-themes name="themes"></app-themes>
            <app-404 name="404"></app-404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: "_pageChanged"
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return ["_routePageChanged(routeData.page)"];
  }

  _routePageChanged(page) {
    // Show the corresponding page according to the route.
    //
    // If no page was found in the route data, page will be an empty string.
    // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = "home";
    } else if (["home", "colors", "mocs"].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = "404";
    }

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case "home":
        import("./views/home.js");
        break;
      case "colors":
        import("./views/colors.js");
        break;
      case "mocs":
        import("./views/mocs.js");
        break;
      case "404":
        import("./views/404.js");
        break;
    }
  }
}

window.customElements.define("my-app", MyApp);
