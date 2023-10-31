const solution = function(isBadVersion) {

    return function(n) {
        let firstVersion = 1;
        let lastVersion = n;
        let prevLastVersion = n;

        if (isBadVersion(firstVersion)) {
            return firstVersion;
        }

        const iterateValidation = () => {
            if (isBadVersion(lastVersion)) {
                prevLastVersion = lastVersion;
                lastVersion = Math.ceil(lastVersion - ((lastVersion - firstVersion)/2)); // ceil(98)

                if ((prevLastVersion - firstVersion) === 1) {
                    return prevLastVersion;
                }

                return iterateValidation();
            } else {
                firstVersion = lastVersion;
                lastVersion = prevLastVersion;
                return iterateValidation();
            }
        }
        return iterateValidation();
    };
};