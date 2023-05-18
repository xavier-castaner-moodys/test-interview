import removeDuplicatesAdvanced from "./index";

test("Should return an array without duplicates", () => {
  const arr = [
    { id: 2, name: "foo", lastname: "bar" },
    { id: 3, name: "bar", lastname: "foo" },
    { id: 4, name: "bar", lastname: "bar" },
    { id: 3, name: "bar", lastname: "foo" },
    { id: 3, name: "foo", lastname: "bar" },
  ];

  expect(removeDuplicatesAdvanced(arr)).toEqual([
    { id: 2, name: "foo", lastname: "bar" },
    { id: 3, name: "bar", lastname: "foo" },
    { id: 4, name: "bar", lastname: "bar" },
    { id: 3, name: "foo", lastname: "bar" },
  ]);
});
