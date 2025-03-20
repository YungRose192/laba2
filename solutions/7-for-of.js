// BEGIN
const calculateAverage = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    let sum = 0;
    let count = 0;
    for (const num of arr) {
        if (typeof num === 'number') {
            sum += num;
            count++;
        }
    }
    if (count === 0) {
        return null;
    }
    return sum / count;
}
export default calculateAverage;

// END