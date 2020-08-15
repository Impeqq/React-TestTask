## Demo - studyproject-17d87.web.app

## Question 1

  function func(s, a, b) {
    if (s.match(/^$/)) {
      return -1;
    }
    var i = s.length - 1,
      aIndex = -1,
      bIndex = -1;
    while (aIndex == -1 && bIndex == -1 && i > 0) {
      if (s[i] == a) {
        aIndex = i;
        return aIndex;
      }
      if (s[i] == b) {
        bIndex = i;
        return bIndex;
      }
      i--;
    }
    return -1;
  }
