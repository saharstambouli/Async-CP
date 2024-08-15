async function iterateWithAsyncAwait(values) {
    for (let value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

iterateWithAsyncAwait([1, 2, 3, 4, 5]);