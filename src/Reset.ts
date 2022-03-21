export class Reset {
    static run() {
        let style = document.body.style
        style.background = "#131313"
        style.height = "100vh"
        style.display = "flex"
        style.justifyContent = "center"
        style.alignItems = "center"
        style.overflow = "hidden"
        style.color = "#fff"
    }
}
