// Define the first async function
async function firstFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("First function executed");
            resolve();
        }, 1000);
    });
}

// Define the second async function
async function secondFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second function executed");
            resolve();
        }, 1000);
    });
}

// Define the third async function
async function thirdFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Third function executed");
            resolve();
        }, 1000);
    });
}

// Define the function to chain the async functions
async function chainedAsyncFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
}

// Call the chained function
chainedAsyncFunctions();
