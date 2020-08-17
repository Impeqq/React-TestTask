function func(s, a, b) {
  if (s.length == 0) {
    return -1;
  }

  var aIndex = -1,
    bIndex = -1;

  if (s.lastIndexOf(a) != null) {
    aIndex = s.lastIndexOf(a);
  }
  if (s.lastIndexOf(b) != null) {
    bIndex = s.lastIndexOf(b);
  }
  return Math.max(aIndex, bIndex);
}
