// BEGIN
const getSameParity = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return [];
    }
    const firstElement = arr[0];
    const isFirstEven = Math.abs(firstElement) % 2 === 0;
    const result = [];

    for (const element of arr) {
        if (typeof element === 'number') {
            const isCurrentEven = Math.abs(element) % 2 === 0;
            if (isCurrentEven === isFirstEven) {
                result.push(element);
            }
        }
    }
    return result;
};

export default getSameParity;

// END