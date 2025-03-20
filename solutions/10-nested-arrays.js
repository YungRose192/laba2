// BEGIN
const getSuperSeriesWinner = (scores) => {
    if (!Array.isArray(scores)) {
        return null;
    }
    let canadaWins = 0;
    let ussrWins = 0;

    for (const score of scores) {
        if (Array.isArray(score) && score.length === 2) {
            const canadaScore = score[0];
            const ussrScore = score[1];

            if (canadaScore > ussrScore) {
                canadaWins++;
            } else if (ussrScore > canadaScore) {
                ussrWins++;
            }
        }
    }
    if (canadaWins > ussrWins) {
        return 'canada';
    } else if (ussrWins > canadaWins) {
        return 'ussr';
    } else {
        return null; // Tie
    }
};
export default getSuperSeriesWinner;

// END