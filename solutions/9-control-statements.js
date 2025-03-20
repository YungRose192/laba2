// BEGIN
const getTotalAmount = (wallet, currency) => {
    if (!Array.isArray(wallet)) {
        return 0;
    }

    let total = 0;

    for (const bill of wallet) {
        if (typeof bill === 'string') {
            const billCurrency = bill.slice(0, 3);
            const amountStr = bill.slice(4);
            const amount = Number(amountStr);
            if (billCurrency === currency) {
                total += amount;
            }
        }
    }
    return total;
};
export default getTotalAmount;
// END