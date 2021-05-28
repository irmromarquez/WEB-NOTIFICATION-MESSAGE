import { LitElement, html } from "lit-element";
import { configMessage } from "./config/dataMessage";

import "button-element/button-element";
import "fontawesome-icon/fontawesome-icon";

// STYLES
import bootstrap from './styles/bootstrap';
import customCss from './styles/web-notification-message-style'


export class webNotificationMessage extends LitElement {

  static get styles() {
    return [bootstrap, customCss]
  }
  
    static get properties() {
        return {
            dataMessage: { type: Array },
            button: { type: String, attribute: "name-button" },
        };
    }

    constructor() {
        super();
        this.dataMessage = new configMessage().dataCard;
        this.button = "Button";

        this.addEventListener('icon-click', (evt) => {
          if(evt.detail.icon == 'close') this.dispayNone(evt.detail.id);
          if(evt.detail.icon == 'arrow-down') this.displayCard(evt.detail.id);
          
          this.requestUpdate();
        })
    }

    dispayNone(id) {
      this.dataMessage.map(element => {
        if(id == element.idCard) element.display = 'none';
      })

    }

    displayCard(id) {
      this.dataMessage.map(element => {
        if(id == element.idCard) element.display = '';
      })
    }

    get paintCard() {
        return html`
            ${this.dataMessage.map((element) => {
                return html`
                    <h4>${element.title} ${element.display == 'none'
                          ? html `<fontawesome-icon
                          class="align-middle"
                          icon="arrow-down"
                          icon-group="${element.idCard}"
                        ></fontawesome-icon>`
                          : html ``
                  }</h4>

                    <div class="alert alert-${element.typeAlert} d-${element.display}">
                        <div class="row">
                          <div class="col-12 row m-0 p-0">
                            <div class="col-1">
                              <fontawesome-icon
                                icon="info"
                              ></fontawesome-icon>
                            </div>

                            <div class="col-10">
                              <h3>${element.subtitle}</h3>
                            </div>

                            <div class="col-1 mr-4">
                            <fontawesome-icon
                                        icon="close"
                                        icon-group="${element.idCard}"
                                    ></fontawesome-icon>
                            </div>

                          </div>

                          <div class="col-12 row m-0 p-0">
                            
                            <div class="col offset-1">
                              <h5>${element.message}</h5>
                            </div>
                          </div>

                          <div class="col-12 row m-0 p-0">
                            <div class="col offset-1 pb-4">
                              <strong>${element.description}</strong>
                            </div>
                          </div>


                          <div class="col offset-1 align-middle">

                          <button-element
                                identifier="${element.idCard}}"
                                .name="${this.button}"
                                .identifier="${element.idCard}"
                            ></button-element>
                            <a class="m-link text-decoration-none text-dark"> 

                              <fontawesome-icon
                              class="align-middle"
                                icon="info"
                                style="--icon-size:16px"
                              ></fontawesome-icon>
                              <span>Link</span>

                            </a>
                            

                          </div>
                            
                        </div>
                    </div>
                `;
            })}
        `;
    }

    render() {
        return html`
            

            <style>
              :host {
                --icon-size:24px;
              }
            </style>
            <div class="container">${this.paintCard}</div>
        `;
    }
}

customElements.define("web-notification-message", webNotificationMessage);
