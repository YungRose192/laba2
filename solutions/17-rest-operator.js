// BEGIN
export const getMax = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    const [first, ...rest] = arr;

    return rest.reduce((max, num) => {
        return num > max ? num : max;
    }, first);
};
// END