function test() {
  var name = "a";
  inner_func();
  showName();
  print(test.caller);
  function showName() {
    print(name);
  }
  function inner_func() {
    print(this);
  }
}
test();
print(test.name);
print(test.caller);
print(test.length);
