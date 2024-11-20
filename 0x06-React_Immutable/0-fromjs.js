const { Map } = require("immutable");

function getImmutableObject(obj) {
  console.log(Map(obj));
  return Map(obj);
}

getImmutableObject({
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
});
