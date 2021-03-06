//----------------------------------------------------------------------------
//                       第三章 关于symbol的一部分
//----------------------------------------------------------------------------
print("//-------------------------------------------");
print("//                       第三章 关于symbol的一部分");
print("//-------------------------------------------");
//因为后面没有讲，记在这里
//生成
var sym = Symbol();
print(sym.toString());
var sym1 = Symbol("hello. i like javascript");
print(sym1.toString());


//----------------------------------------------------------------------------
//                       第四章 object,数组,函数基础
//----------------------------------------------------------------------------
//-------------------------------------------
// 4.1  object的基础（1） 对象字符(literal)
//-------------------------------------------
print("//-------------------------------------------");
print("// 4.1  object的基础（1） 对象字符(literal)");
print("//-------------------------------------------");
//测试获取值的方法， 说明两种定义似乎没有区别
var test = {test1: 1, "test2": 2};
print(test.test1, test["test1"]);
print(test["test2"], test.test2);

//增加与删除要素
var test = {};
print("没添加: ", test.test1);
test.test1 = "hello";
print("已添加: ", test.test1);
delete(test.test1);
print("已删除:", test.test1);
test.test1 = null;
print("空值:", test.test1);

//判断是否存在该属性
print("是否存在? :","test1" in test);

//-------------------------------------------
// 4.2  函数基础
//-------------------------------------------
print("//-------------------------------------------");
print("// 4.2  函数基础");
print("//-------------------------------------------");
function printNum(num) {
  print('你输入的数字: ' + num);
}
printNum(1234);
//测试作用域
print(test4_2);
var test4_2;
var test4_2;
var test4_2;
var test4_2;
var test4_2;
let a_4_2 = 1;
//测试let和var的区别
{
  var b_4_2 = 2;
  let c_4_2 = 2;
}
print("4.2 a = " + a_4_2);
print("4.2 b = " + b_4_2);
//print("4.2 c = " + c_4_2); //会报错

//带方法的对象
let funcObject = {
  one: 1,
  two: 2,
  getAll: function() {
    return this.one + this.two;
  }
}

print(funcObject.getAll());
//-------------------------------------------
// 4.3  object的基础（2） constructor(构造函数)
//-------------------------------------------
print("//-------------------------------------------");
print("// 4.3  object的基础（2） constructor(构造函数)");
print("//-------------------------------------------");

function ObjectTest(numA, numB) {
  this.numA = numA;
  this.numB = numB;
  //return this
}

let objectTest = new ObjectTest(111, 222);
print("a: " + objectTest.numA + "\nb: " + objectTest.numB);

//-------------------------------------------
// 4.4  object的基础（3） 对象字符(literal)
//-------------------------------------------
print("//-------------------------------------------");
print("// 4.4  object的基础（3） 对象字符(literal)");
print("//-------------------------------------------");
print("//Date")
var now = new Date();
print(now);
var ful = new Date(2100, 10, 0);
print(ful);

// print((ful - now).getHours());


//-------------------------------------------
// 4.5 数组的基础
//-------------------------------------------
print("//-------------------------------------------");
print("// 4.5 数组的基础");
print("//-------------------------------------------");
//生成
let arraySample = ["a", 1, 1.2];
print(arraySample);
arraySample.length = 2;
print(arraySample);
