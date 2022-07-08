function checkOddEven(num) {
    if (typeof num === "string") {
        throw new Error("n must be a number")
    }
    return num % 2 === 0 ? 'even' : 'odd';
}

function getCurrentYearr() {
    return new Date().getFullYear()
}

function leapYear() {
    const year = getCurrentYearr()
    return (year & 3) == 0 && ((year % 25) != 0 || (year & 15) == 0);
}

function getCurrentDay() {
    return new Date();
}

function isWeekend() {
    const date = getCurrentDay()
    return date.getDay() === 6 || date.getDay() === 0;
}

function sum(a, b) {
    return a + b;
}

function getZero() {
    return 0;
}

function getCurrentYear() {
    return new Date().getFullYear();
}

function is21Century () {
    const year = getCurrentYear()
    return year >= 2000 && year < 2100;
}


module.exports = {
    checkOddEven,
    sum,
    getZero,
    is21Century,
    getCurrentYear,
    isWeekend,
    leapYear,
    getCurrentDay,
    getCurrentYearr
};
