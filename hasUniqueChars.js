// Write your code below
const hasUniqueChars = name => {
    for (let i = 0; i < name.length; i++) {
        for (let j = i + 1; j < name.length; j++) {
            if (name[i] === name[j]) {
                return false;
            }
        }
    }

    return true;
};

console.log(hasUniqueChars("Monday"));

console.log(hasUniqueChars("Moonday"));
