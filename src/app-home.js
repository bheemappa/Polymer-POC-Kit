/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class AppHome extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .circle{
              display: inline-block;
              width: 30px;
              height: 30px;
              text-align: center;
              color: #555;
              border-radius: 50%;
              background: #ddd;
              font-size: 20px;
              line-height: 31px;
        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <p>
        Polymer is a library created by Google that enables us to build cross-browser compatible apps and elements with web components
        </p>
        <div class="circle">2</div>
        <p>
         It provides syntactic sugar to native web components as well as polyfills for browsers that don't support web components yet. Shadow DOM is difficult and costly to polyfill, so Polymer provides a separate shady DOM polyfill to implement the features of shadow DOM in browsers that lack support.
        </p>
      </div>
    `;
  }
}


window.customElements.define('app-home', AppHome);
