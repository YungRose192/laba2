// BEGIN
export const reverse = (arr) => {
    if (!Array.isArray(arr)) {
        return; // Or throw an error if desired
    }

    const length = arr.length;
    const middle = Math.floor(length / 2);

    for (let i = 0; i < middle; i++) {
        const temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
};
export default reverse;

// END