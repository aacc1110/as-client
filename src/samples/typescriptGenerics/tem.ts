// Array
// last
// makeArr: 2 generics, return, overwrite inference, default value
// addFullName: extends
// interfaces
// props
// useState
// jsx generic

const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};
const l = last([1, 2, 3]);
const l2 = last(['a', 'b', 'c']);

const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};
const v = makeArr(5, 6);
const v2 = makeArr('a', 'b');
const v3 = makeArr(null, 6);

const makeFullName = <T extends { firstName: string; lastName: string }>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName
  };
};
const v4 = makeFullName({ firstName: 'hwang', lastName: 'junior', age: 45 });

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}
type NumberTab = Tab<number>;
type StringTab = Tab<string>;

export default { l, l2, v, v2, v3, v4 };
