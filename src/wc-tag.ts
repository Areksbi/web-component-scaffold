import template from './wc-tag.pug';

class WcTag extends HTMLElement {
  static get tag(): string {
    return 'wc-tag';
  }

  static get observedAttributes(): string[] {
    return ['wc-color'];
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = template();
    }
  }

  connectedCallback(): void {}

  disconnectedCallback(): void {}

  attributeChangedCallback(attrName: string, oldVal: string, newVal: string): void {}

  adoptedCallback(): void {}
}

window.customElements.define(WcTag.tag, WcTag);
