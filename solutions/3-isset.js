// BEGIN
export const get = (arr, index, defaultValue = null) => {
    if (!Array.isArray(arr)) {
        return defaultValue;
    }

    if (index < 0 || index >= arr.length) {
        return defaultValue;
    }

    return arr[index];
};
export default get;

// END