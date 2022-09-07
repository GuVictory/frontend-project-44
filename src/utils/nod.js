const NOD = (x, y) => {
  if (y > x) {
    return NOD(y, x);
  }

  if (!y) {
    return x;
  }

  return NOD(y, x % y);
};

export default NOD;
