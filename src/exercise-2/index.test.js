const convertArrToObject = require("./index");

test("Should convert an array to a object", () => {
  const arr = [
    {
      id: "1",
      name: "foo",
    },
    {
      id: "2",
      name: "bar",
    },
  ];

  const expectedObj = {
    1: {
      name: "foo",
    },
    2: {
      name: "bar",
    },
  };

  expect(convertArrToObject(arr)).toEqual(expectedObj);
});
