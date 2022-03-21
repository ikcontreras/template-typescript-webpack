class Box extends HTMLElement {
    constructor() {
        super();
        this.style.display = "flex"
        this.style.width = "20px"
        this.style.height = "20px"
        this.style.border = "1px solid black"
    }
}

export default {
    name: 'custom-box',
    constructor: Box
}