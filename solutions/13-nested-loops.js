const _ = require("lodash"); 

// BEGIN
const getSameCount = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return 0; // Handle invalid input
    }

    const uniqueArr1 = uniq(arr1);
    const uniqueArr2 = uniq(arr2);

    let count = 0;

    uniqueArr1.forEach(element1 => {
        if (uniqueArr2.includes(element1)) {
            count++;
        }
    });

    return count;
};

export default getSameCount;

// END