const mathModel = require("../../storage/models/math.model");

const checkOddEven = async (req, res) => {
    const { n } = req.body;
    try {
        const result = await mathModel.checkOddEven(n);
        res.json({
            data: result,
            error: null
        });
    } catch (e) {
        res.json({
            data: null,
            error: e.message
        });
    } finally {
        res.end();
    }
};

const sum = async (req, res) => {
    const { a, b } = req.body;
    try {
        const result = await mathModel.sum(a, b);
        res.json({
            data: result,
            error: null
        });
    } catch (e) {
        res.json({
            data: null,
            error: e.message
        });
    } finally {
        res.end();
    }
};

const leapYear = async (req, res) => {  
    year = new Date().getFullYear()
    const result = (year & 3) == 0 && ((year % 25) != 0 || (year & 15) == 0);
    res.json({
        data: result,
        error: null
    });
    res.end();
};

const getZero = async (req, res) => {
    const result = await mathModel.getZero();
    res.json({
        data: result,
        error: null
    });
    res.end();
};

const isWeekend = async (req, res) => {
    const date = new Date()
    const result = date.getDay() === 6 || date.getDay() === 0;
    res.json({
        data: result,
        error: null
    });
    res.end();
};



module.exports = {
    checkOddEven,
    sum,
    getZero,
    isWeekend,
    leapYear
};
