function fact(n) {
  if (n<=1) {
    return n;
  }
  return n*fact(n-1);
}

for (var i = 0; i < 10; i++) {
  print(i + "! = " + fact(i));
}
