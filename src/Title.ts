class Title extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "open" })
        const title = this.getAttribute("data-title")
        shadowRoot.innerHTML = `
            <style>
                .wrapper {
                    display: flex;
                    justify-content: center;
                    align-content: center;
                }
            </style>
            <div class="wrapper">
                <h2>${title}</h2>
            </div>
        `
    }
}

export default {
    name: 'x-title',
    constructor: Title
}