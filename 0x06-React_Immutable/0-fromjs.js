import { fromJS } from 'immutable';

export default function getImmutableObject (obj) {
  console.log(fromJS(obj));
  return fromJS(obj);
}

getImmutableObject({
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
});
