const testArray = [1.13, 1,3, 1.12, 2, 33];

function smallestNumber(numbers) {
    if (typeof numbers === "undefined" || numbers.length === 0) {
        return null;
    }

    let smallest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const current = numbers[i];

        if (current < smallest) {
            smallest = current;
        }
    }

    return smallest;
}
console.log(smallestNumber(testArray));

const testArra = [];

console.log(smallestNumber(testArra));