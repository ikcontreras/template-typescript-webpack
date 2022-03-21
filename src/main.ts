import Box from "./HelloWorld";

interface Component {
    name: string,
    constructor: CustomElementConstructor,
    option?: ElementDefinitionOptions
}

class App {
    static load(components: Array<Component>) {
        components.map(component => {
            window.customElements.define(component.name, component.constructor, component.option)
        })
    }
}

App.load([
    Box
])