class WcTag extends HTMLElement {
    static get tag() {
        return 'wc-tag'
    }

    static get observedAttributes() {
        return ['wc-color', 'wc-variant']
    }

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>
    h1 {
        font-size: 7rem;
        color: #000;
        font-family: Helvetica;
        text-align: center;
    }
</style>
<h1>My Custom Title!</h1>`
        }
    }

    connectedCallback() {

    }

    disconnectedCallback() {

    }

    attributeChangedCallback(attrName, oldVal, newVal) {

    }

    adoptedCallback() {

    }
}

window.customElements.define(WcTag.tag, WcTag);
