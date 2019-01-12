document.addEventListener("DOMContentLoaded", function () {
  //------------------------------------------------------------
  //                      宣言的レンダリング
  //------------------------------------------------------------
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  });
  console.log(app);
  app.message = "123";

  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  });
  app2.message = 'some new message';


  //------------------------------------------------------------
  //                      条件分岐とループ
  //------------------------------------------------------------

  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  });
  // 五秒間、1秒ごとに点滅
  // var count = 0;
  // var id = setInterval(function () {
  //   count += 1;
  //   if (count >= 5) {
  //     clearInterval(id);
  //   }
  //   app3.seen = !app3.seen;
  // }, 1000);


  //for
  var app4 = new Vue({
    el: "#app-4",
    data: {
      datas: [
        { text: "first" },
        { text: "second" },
        { text: "third" }
      ]
    }
  });

  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'event listener'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('');
      }
    }
  });

  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'v-model sample'
    }
  });

  Vue.component('cop-1', {
    template: '<p>component sample 1</p>'
  });

  Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
  });
  var app7 = new Vue({
    el: '#app-7'
  });


  Vue.component('cop-2', {
    props: ["prop"],
    template: "<p>prop: {{ prop }}</p>"
  });

  var app8 = new Vue({
    el: '#app-8',
    data: {
      numbers: [
        1, 2, 3, 4
      ]
    }
  });

  //------------------------------------------------------------
  //                     ユーザー入力の制御
  //------------------------------------------------------------
  

});
