//----------------------------------------------------------------------------
//                           第7章 条件语句
//----------------------------------------------------------------------------
//-------------------------------------------
// 7.1 概览
//-------------------------------------------

//-------------------------------------------
// 7.2 条件
//-------------------------------------------
print("//-------------------------------------------");
print("// 7.2 条件");
print("//-------------------------------------------");
let if_date = {
  people: {
    a: {name: "a", age: 18},
    b: {name: "b", age: 20},
    c: {name: "c", age: 22}
  },

  animal: {
    bird: {power: 100, def: 80}
  }
}

if (if_date.people.a.name !== null) {
  print("if_date.people.b.age: ", if_date.people.b.age);
}else if (if_date.animal.bird.power < 120) {
  print("if_date.animal.bird.power: ",if_date.animal.bird.power);
}else {
  print("wrong!");
}

switch (if_date.people.a.age) {
  case 18:
    print("if_date.people.a.age = 18");
    break;
  case 19:
    print("if_date.people.a.age = 19");
  default:
    print("if_date.people.a.age != 18, 19");
}
//-------------------------------------------
// 7.3 循环
//-------------------------------------------
let i = 0;
while (i < 100) {
  print(i);
  i++;
}

do {
  print(i);
  i++;
} while (i < 200);

for(; i < 300; i++) {
  print(i);
}

for (var temp in if_date) {
  print(temp);
  for (var temp2 in if_date[temp]) {
    print(temp2);
  }
}
//-------------------------------------------
// 7.4 跳出语句
//-------------------------------------------

//-------------------------------------------
// 7.5 应用
//-------------------------------------------