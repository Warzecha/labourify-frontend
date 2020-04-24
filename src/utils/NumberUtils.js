export function round(value, decimalPlaces = 2) {
    return parseFloat(value).toFixed(decimalPlaces);
}


export const shortNumberFormat = (value) => {
    if (value < 5000) {
        return round(value, 1)
    } else if (value < 20000) {
        const thousands = value / 1000;
        return round(thousands, 2) + 'k'
    } else if (value < 1000000) {
        const thousands = value / 1000;
        return round(thousands, 1) + 'k'
    } else {
        const millions = value / 1000000;
        return round(millions, 3) + 'M'
    }
};
