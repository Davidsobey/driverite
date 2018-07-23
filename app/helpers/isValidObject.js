function getSafe(fn) {
  try {
    return fn();
  } catch (e) {
    return undefined;
  }
}

export default getSafe;
