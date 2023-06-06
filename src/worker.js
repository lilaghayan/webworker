
/* eslint-disable no-restricted-globals */

self.addEventListener('message', (event) => {
    const { data } = event;
    const result = calculateFactorial(data);
    self.postMessage(result);
});


function calculateFactorial(number) {
    let factorial =  BigInt(1);
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

export {};
