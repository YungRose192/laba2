// BEGIN
export const calculateSum = (arr) => {
    if (!Array.isArray(arr)) {
        return 0;
    }
    if (arr.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && arr[i] % 3 === 0) {
            sum += arr[i];
        }
    }
    return sum;
};
export default calculateSum;
// END