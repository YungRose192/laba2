// BEGIN
export const swap = (arr) => {
    if (!Array.isArray(arr)) {
        return arr;
    }

    return arr.length < 2 ? arr : (([arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]), arr);
};

// END