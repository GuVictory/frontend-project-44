const GCD = (x, y) => {
  if (y > x) {
    return GCD(y, x);
  }

  if (!y) {
    return x;
  }

  return GCD(y, x % y);
};

export default GCD;
