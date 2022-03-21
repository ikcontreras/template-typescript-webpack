import {Reset} from "./Reset";

interface Component {
    name: string,
    constructor: CustomElementConstructor,
    option?: ElementDefinitionOptions
}

export class App {
    static load(components: Array<Component>): void {
        Reset.run()
        components.map(component => {
            window.customElements.define(component.name, component.constructor, component.option)
        })
    }
}
