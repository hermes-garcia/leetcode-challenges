/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    const chars = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    let finalNumber = 0;
    const romanNumber = s.split('');
    romanNumber.map((letter, i) => {
        switch (letter) {
            case 'I':
                if (romanNumber[i + 1] === 'V' || romanNumber[i + 1] === 'X') {
                    finalNumber += -1;
                } else {
                    finalNumber += chars.get(letter);
                }
                break;
            case 'X':
                if (romanNumber[i + 1] === 'L' || romanNumber[i + 1] === 'C') {
                    finalNumber += -10;
                } else {
                    finalNumber += chars.get(letter);
                }
                break;
            case 'C':
                if (romanNumber[i + 1] === 'D' || romanNumber[i + 1] === 'M') {
                    finalNumber += -100;
                } else {
                    finalNumber += chars.get(letter);
                }
                break;
            default:
                finalNumber += chars.get(letter);
        }
    });

    return finalNumber;
};


console.log(romanToInt('MCDXLIX'));