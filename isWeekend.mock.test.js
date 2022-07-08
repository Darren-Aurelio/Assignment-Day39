const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");
const mathModel = require("../../../storage/models/math.model");

// jest.mock("../../../storage/models/math.model", () => {
//     return {
        // getCurrentDay: jest.fn()
//     };
// })

test("isWeekend true", async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-09-24'))
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/isWeekend",
    });
    const response = httpMocks.createResponse();
    // mathModel.getCurrentDay.mockResolvedValue(24);
    await mathHandler.isWeekend(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});

test("isWeekend false", async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2020-09-24'))
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/isWeekend",
    });
    const response = httpMocks.createResponse();
    // mathModel.getCurrentDay.mockResolvedValue(24);
    await mathHandler.isWeekend(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: false,
        error: null
    });
});