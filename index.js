function Test() {
    // let _this = this;
    this.printHello = () => {
        const body = document.querySelector("body");
        const div = document.createElement("div");
        div.textContent = "Hello world";

        body.appendChild(div);
    };
}

const test = new Test();

module.exports = {
    printHello: test.printHello,
};