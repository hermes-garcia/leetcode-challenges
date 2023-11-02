/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    const searchLastNine = () => {
        if (digits[lastPosition] === 9 && lastPosition !== 0) {
            lastPosition = lastPosition - 1;
            return searchLastNine();
        }
        return lastPosition;
    }

    let lastPosition = digits.length - 1;
    if (digits[lastPosition] !== 9) {
        digits[lastPosition] = digits[lastPosition] + 1;
    } else {
        if (digits.length === 1) {
            return [1, 0];
        }
        let last = searchLastNine();
        if (last === 0 && digits[last] === 9) {
            digits.unshift(1);
            last++;
        }
        for (let i = last; i < digits.length; i++) {
            if (digits[i] === 9) {
                digits[i] = 0;
            } else {
                digits[i] = digits[i] + 1;
            }
        }
    }

    return digits;
};