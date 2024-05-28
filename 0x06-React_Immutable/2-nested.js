import { fromJS } from './node_modules/immutable/dist/immutable';

export default function accessImmutableObject(object, array) {
  const map_Obj = fromJS(object);

  return map_Obj.getIn(array, undefined);
}
