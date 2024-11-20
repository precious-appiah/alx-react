const { fromJS } = require("immutable");

export default function getImmutableObject(obj) {
  console.log(Map(obj));
  return fromJS(obj);
}
