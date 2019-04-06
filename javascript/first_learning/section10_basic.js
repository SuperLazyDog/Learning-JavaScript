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

    a.forEach((a, b, c)=>{
      console.log(`value: ${a}, index: ${b}, array: ${c}`);
    });
    var b = a.map((v)=>{
      return 100;
    });
    console.log(a);
    console.log(b);
    a = [1, 2, 3, 4, 5, 6]
    a.reduce((prev, value, index, array) => {
      console.log(`prev: ${prev}, value: ${value}, index: ${index}, array: ${array}`);
      return prev + value;
    });
    var iter = a.entries();
    for (var temp of iter) {
      console.log(temp);
    }
    a.every((v, i, a) => {
      console.log(this);
      return false;
    });
    var c = a.filter((v, i, a) => {
      return false;
    })
    console.log(c);
    console.log(a.find((v) => {
      return v%3 === 0;
    }));
    a = ["h", "das", "sa", "ol"]
    for (var temp of a.keys()) {
      console.log(temp);
    }
    for (var temp of a.values()) {
      console.log(temp);
    }
    a.reduceRight((p, v, i, a) => {
      console.log(`p: ${p}, v: ${v}, i: ${i}, a: ${a}`);
    });
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

    function* sample() {
        yield 1;
        yield 2;
        yield 3;
    }
    iter = sample();
    for(var t of iter) {
        console.log(`sample data: ${t}`);
    }

    function* fibonacci() {
      var fn1 = 0, fn2 = 1;
      while(true) {
        var fnew = fn1+fn2;
        fn1 = fn2;
        fn2 = fnew;
        var reset = yield fn1;
        console.log(`reset: ${reset}`);
        if (reset) {
          fn1 = 0;
          fn2 = 1;
        }
      }
    }
    var iter2 = fibonacci();
    // for (var i = 0; i < 10; i++) {
    //   console.log(iter2.next().value);
    // }
    console.log(iter2.next());
    console.log(iter2.next(true));
    console.log(iter2.next());
    var iter3 = (function* iterator3() {
      const str = "i am kedaya";
      yield* str;
    })();
    for (var v of iter3) {
      console.log(v);
    }
  }
}

let arys = [new Array1(), new Array2(), new Array3(), new Array4()];
for (var i = 0; i < arys.length-1; i++) {
  arys[i].pro();
}
