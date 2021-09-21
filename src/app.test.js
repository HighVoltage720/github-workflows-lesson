const { dayOfTheWeek } = require("./app");

test("getDay returns the long-format day of the week", () => {
  const day = dayOfTheWeek(new Date("9/21/2021"));
  expect(day).toBe("Tuesday");
});
