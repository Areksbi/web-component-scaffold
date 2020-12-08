import template from './wc-tag.pug';

class WcTag extends HTMLElement {
  static get tag() {
    return 'wc-tag';
  }

  static get observedAttributes() {
    return ['wc-color'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = template();
    }
  }

  connectedCallback() {}

  disconnectedCallback() {}

  attributeChangedCallback(attrName, oldVal, newVal) {}

  adoptedCallback() {}
}

window.customElements.define(WcTag.tag, WcTag);
