export default (namespace, obj) => {
  if(!global[namespace]) {
    global[namespace] = obj;
  }
  return global[namespace]
}
