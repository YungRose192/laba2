// BEGIN
const bubbleSort = (arr) => {
    if (!Array.isArray(arr)) {
        return arr;
    }
    const n = arr.length;
    const sortedArr = [...arr];
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                const temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }
    return sortedArr;
};
export default bubbleSort;

// END