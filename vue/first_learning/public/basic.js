// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   }
// })
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString(),
    condition: true,
    loop: [
      {text: 1},
      {text: 2},
      {text: 3}
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'sample'
  },
  methods: {
    reserveMsg: function() {
      console.log(this);
      let msg = this.message;
      msg  = this.message.split('').reverse().join('');
      this.message = msg;
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

Vue.component('Sample', {
  template: '<li>Sample{{data.text}}</li>',
  props: ['data']
});
Vue.component('todo-item', {
  template: '<li>todo-item{{data.text}}</li>',
  props: ['data']
})
var list = [];
for (var i = 0; i < 3; i++) {
  let temp = {};
  temp.id = i;
  temp.text = `测试数据${i+1}`;
  list[i] = temp;
}
var app7 = new Vue({
  el: '#app-7',
  data: {
    list
  },
  methods: {

  }
});
