import { LitElement, html } from 'lit-element';
import { configMessage } from './config/dataMessage';

export class webNotificationMessage extends LitElement {

  static get properties() {
    return {
      dataMessage: {type: Array}
    };
  }

  constructor() {
    super();
    this.dataMessage = new configMessage().dataCard;

  }

  get paintCard() {
    return html `
    ${this.dataMessage.map(element => {
      return html`
            
      <div class="alert alert-${element.typeAlert}">
        This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>
      
      `
    })}
    `
  }

  render() {
    return html`

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

    ${this.paintCard}
    
    `;
  }

}


customElements.define('web-notification-message', webNotificationMessage);
