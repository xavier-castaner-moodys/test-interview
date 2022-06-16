const removeDuplicates = require("./index");

test("Should return an array without duplicates", () => {
  const arr = ["A", "A", "B", "C", "B"];
  expect(removeDuplicates(arr)).toEqual(["A", "B", "C"]);
});
