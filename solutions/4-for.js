// BEGIN
const addPrefix = (arr, prefix) => {
    if (!Array.isArray(arr)) {
        return [];
    }
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            result.push(`${prefix} ${arr[i]}`);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
};
export default addPrefix;


// END