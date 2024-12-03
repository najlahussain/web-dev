// JavaScript modules allow you to break up your code into separate files.
// This makes it easier to maintain a code-base.
//Two types of exports, named exports and default exports

// const method1 = () => {
//     return "method 1 called";
// }

// const method2 = () => {
//     return "method 2 called";
// }

// const method3 = () => {
//     return "method 3 called";
// }

//you can only have one default export in a file
// export default method1;
// export { method2, method3 };

// Modules only work with the HTTP(s) protocol.
// A web-page opened via the file:// protocol cannot use import / export.

const method1 = () => {
    return "method 1 called from module1.js";
}

const method2 = () => {
    return "method 2 called from module1.js";
}

const method3 = () => {
    return "method 3 called from module1.js";
}
export { method1, method2 };
export default method3;
