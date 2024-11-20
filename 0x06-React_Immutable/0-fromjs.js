import {fromJS} from "immutable";

export default function getImmutableObject(obj) {
  console.log(Map(obj));
  return fromJS(obj);
}
