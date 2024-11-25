function arealine() {
    // Assuming arealine() returns an object with methods x() and y()
    return {
        x: function(xVal) {
            // Some logic related to x
            console.log("Setting x coordinate:", xVal);
            return this; // Return the object itself for chaining
        },
        y: function(yVal) {
            // Some logic related to y
            console.log("Setting y coordinate:", yVal);
            return this; // Return the object itself for chaining
        }
    };
}

function useArealine(x0, y0) {
    return arealine().x(x0).y(y0);
}

// Example usage
let result = useArealine(10, 20); // This will set x to 10 and y to 20
console.log(result); // Outputs: { x: [Function: x], y: [Function: y] }
