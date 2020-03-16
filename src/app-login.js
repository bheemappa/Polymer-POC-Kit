/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import './shared-styles.js'
import '@polymer/paper-card/paper-card.js'
import '@polymer/paper-button/paper-button.js'
import '@polymer/paper-input/paper-input.js'

class AppLogin extends PolymerElement {
  constructor () {
    super()
  }
  ready () {
    super.ready()
  }
  static get properties () {
    return {
      _login: {
        type: Function
      }
    }
  }
  static get template () {
    return html`
      <style>
        iron-pages {
          display: none !important;
        }
        .center {
          width: 100%;
          text-align: center;
        }
        paper-card {
          width: 37%;
          display: inline-block;
          margin-top: 3%;
        }
      </style>
      <div class="center">
        <br />
        <paper-card class="rate">
          <div class="card-content">
            <img
              src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-9/512/Login-icon.png"
              width="33%"
            />
            <paper-input
              id="User_name"
              name="usser"
              float-label
              label="Username"
            ></paper-input>
            <paper-input
              id="Password"
              type="password"
              name="Password"
              float-label
              label="Password"
            ></paper-input>
          </div>
          <div class="card-actions">
            <paper-button
              raised
              on-tap="_login"
              class="indigo"
              style="background:green;color:#fff;width:100%"
              >Login</paper-button
            >
          </div>
        </paper-card>
      </div>
    `
  }
  _login () {

    if(this.$.User_name.value === '' || this.$.Password.value === ''){
          alert("Please enter valid user name and password")
    }else{
          alert("Login Success !")
    }
  }
}

window.customElements.define('app-login', AppLogin)
