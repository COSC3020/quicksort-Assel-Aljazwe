function quicksort(array) {
    // Stack to simulate the recursive calls
    let stack = [[0, array.length - 1]];

    while (stack.length) {
        const [start, end] = stack.pop();
        if (start >= end) continue;

        const pivotIndex = partition(array, start, end);

        // Push subarrays defined by pivotIndex back onto the stack
        stack.push([start, pivotIndex - 1]);
        stack.push([pivotIndex + 1, end]);
    }

    return array;
}

function partition(array, start, end) {
    const pivotValue = array[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
            pivotIndex++;
        }
    }
    // Swap pivot to the correct position
    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    return pivotIndex;
}
