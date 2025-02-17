"use strict";

class StringBuilder {
    #value;
    constructor(value) {
        this.#value = value;
    }

    getValue() {
    }

    padEnd(str) {
    }

    padStart(str) {
    }

    padBoth(str) {

    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
