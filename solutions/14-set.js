// BEGIN
const countUniqChars = (str) => {
    if (typeof str !== 'string') {
        return 0; // Or throw an error if you prefer
    }

    if (str.length === 0) {
        return 0;
    }

    return new Set(str).size;
};

export default countUniqChars;
// END