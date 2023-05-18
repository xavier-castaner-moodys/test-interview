type ObjWithID = {
  id: string;
};

type ObjWithName = {
  name: string;
};

type Received = Array<ObjWithID & ObjWithName>;

type Expected = Record<string, ObjWithName>;

const convertArrToObject = (arr: Received): Expected => {
  return {};
};

export default convertArrToObject;
