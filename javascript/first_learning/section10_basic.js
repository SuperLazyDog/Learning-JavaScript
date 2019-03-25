//----------------------------------------------------------------------------
//                         第 10 章 数组的详细功能
//----------------------------------------------------------------------------
//-------------------------------------------
// 10.1 数组的方法
//-------------------------------------------
class Array1 {
  pro() {
    console.log("//-------------------------------------------");
    console.log("10.1 数组的方法");
    console.log("//-------------------------------------------");
    let a = Array(1);
    // push
    a.push(1);
    console.log(a);
    a.push(2, 3);
    console.log(a);

    a = Array(10);
    a[a.length-1] = 2;
    a[a.length-2] = 1;
    a[a.length-3] = 0;
    console.log(a);
    a.copyWithin(0, -3);
    console.log(a);
  }
}
//-------------------------------------------
// 10.2 多次元数组
//-------------------------------------------
class Array2 {
  pro() {
    console.log("//-------------------------------------------");
    console.log("// 10.2 多次元数组");
    console.log("//-------------------------------------------");
    var a = Array(10);
    for (var i = 0; i < a.length; i++) {
      a[i] = i;
    }
    console.log(`a: [${a}]`);
    console.log(`a.join("|"): ${a.join("|")}`);
    console.log(`a.concat([11, 12], [13, 14]): ${a.concat([11, 12], [13, 14])}`);
    var b = [100, 99, [101, 102]];
    var c = a.concat(b);
    console.log(c);

    console.log(c);
    console.log(a.slice());
    a = [2, 1, 1, 1, 1, 2];
    console.log(a.indexOf(1));
    console.log(a.lastIndexOf(1));
    a = ["a", "b", "apple", "无敌", "还是无敌"];
    console.log(a.toString() === a.join());
    console.log(a.toLocaleString() === a.join());

  }
}
//-------------------------------------------
// 10.3 数组般的对象
//-------------------------------------------
class Array3 {
  pro() {

  }
}
//-------------------------------------------
// 10.4 ES关于数组与对象的扩张
//-------------------------------------------
class Array4 {
  pro() {
    console.log("//-------------------------------------------");
    console.log("// 10.4 ES关于数组与对象的扩张");
    console.log("//-------------------------------------------");
    var a = Array(10);
    for (var i = 0; i < a.length; i++) {
      a[i] = i;
    }
    var iter = a[Symbol.iterator]();
    // for (var i = 0; i < a.length+1; i++) {
    //   console.log(iter.next());
    // }

    // while (true) {
    //   const temp = iter.next();
    //   if (temp.done) {
    //     break;
    //   }
    //   console.log(temp);
    // }

    // for (var i = iter.next();i.done===false; i = iter.next()) {
    //   console.log(i);
    // }

    for (var v of iter) {
      console.log(v);
    }
  }
}

let arys = [new Array1(), new Array2(), new Array3(), new Array4()];
for (var i = 0; i < arys.length; i++) {
  arys[i].pro();
}
