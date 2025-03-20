// BEGIN
const makeCensored = (text, stopWords) => {
    if (typeof text !== 'string' || !Array.isArray(stopWords)) {
        return text;
    }
    const words = text.split(' ');
    const censoredWords = words.map(word => {
        const lowerCaseWord = word.toLowerCase();
        if (stopWords.includes(lowerCaseWord)) {
            return '$#%! ';
        }
        return word + ' ';
    });
    return censoredWords.join('').trim();
};
export default makeCensored;

// END