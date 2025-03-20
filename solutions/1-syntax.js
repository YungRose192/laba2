// BEGIN (write your solution here)
export const getWeekends =(format ='long') => {
    if (format === 'short') {
        return ['sat', 'sun'];
    }

    return ['saturday', 'sunday'];
}
// END
