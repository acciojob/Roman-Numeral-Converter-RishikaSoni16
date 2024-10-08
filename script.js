const romanNumerals = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
];

const toRoman = (num) => {
    if (num < 1 || num > 100000) return "Invalid input";

    let result = '';
    
    // Handle special cases for subtraction
    if (num >= 1000) {
        while (num >= 1000) { result += 'M'; num -= 1000; }
    }
    if (num >= 900) { result += 'CM'; num -= 900; }
    if (num >= 500) { result += 'D'; num -= 500; }
    if (num >= 400) { result += 'CD'; num -= 400; }
    if (num >= 100) {
        while (num >= 100) { result += 'C'; num -= 100; }
    }
    if (num >= 90) { result += 'XC'; num -= 90; }
    if (num >= 50) { result += 'L'; num -= 50; }
    if (num >= 40) { result += 'XL'; num -= 40; }
    if (num >= 10) {
        while (num >= 10) { result += 'X'; num -= 10; }
    }
    if (num >= 9) { result += 'IX'; num -= 9; }
    if (num >= 5) { result += 'V'; num -= 5; }
    if (num >= 4) { result += 'IV'; num -= 4; }
    if (num >= 1) {
        while (num >= 1) { result += 'I'; num -= 1; }
    }

    return result;
};
// Example usage:
const input = parseInt(blurt("Enter a number between 1 and 100,000: "), 10);
alert(toRoman(input));
