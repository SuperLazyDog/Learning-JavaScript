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
  temp.title = `uuid${i+1}`;
  list[i] = temp;
}
// Object.freeze(list);
var app7 = new Vue({
  el: '#app-7',
  data: {
    list
  },
  methods: {

  }
});

var app8 = new Vue({
  el: '#app-8',
  data: {
    data: 100,
    sample_class: 'sample',
    sample_id: 'id'
  },
  methods: {
    now: function() {
      return new Date();
    }
  },
  computed: {
    computedData: {
      get: function() {
        console.log(this);
        return this.data * 3;
      },
      set: function(newValue) {
        this.data = newValue;
      }
    },
    computed_now: function() {
      return new Date();
    }
  },
  watch: {
    data: function() {
      console.log('watching data now');
    }
  }
});

var app9 = new Vue({
  el: "#app-9",
  data: {
    classes: {
      isActive: true
    }
  },
  props: [

  ],
  methods: {

  }
});

var app10 = new Vue({
  el: "#app-10",
  data: {
    show: true,
    notShow: false
  }
});

var app11 = new Vue({
  el: "#app-11",
  data: {
    list,
    sampleData: {
      a: 'here is a',
      b: 'here is b',
      c: 'here is c'
    }
  },
  computed: {
    filteredList: function() {
      return this.list.filter(function(v, i, a) {
        return v.id%2 == 0;
      });
    }
  }
});

var app12 = new Vue({
  el: '#app-12',
  data: {
    click_count: 0
  },
  methods: {
    msg: function(msg) {
      console.log("fired");
      this.click_count++;
      // alert(msg);
    },
    debug: function(msg) {
      console.log(`UUID ${msg}`);
    }
  }
});

var options = []
for (var i = 0; i < 10; i++) {
  options[i] = {};
  options[i].text = i;
  options[i].value = `UUID${i}`;
}
var app13 = new Vue({
  el: '#app-13',
  data: {
    text_input: 'sample',
    textarea_input: 'sample',
    single_checkbox_input: true,
    checkbox_input: [2, 3],
    radio_input: null,
    single_select_input: 'b',
    select_input: [],
    options,
    vForSample: "UUID7"
  }
});

Vue.component('sample-component', {
  data: function() {
    return {
      text: 'sample-component'
    };
  },
  props: ['test'],
  template: `
    <p v-on:click="clickHander">
      text: {{text}}, {{test}}
    </p>
  `,
  methods: {
    clickHander: function() {
      // console.log('before');
      this.$emit('sample-event', 0);
      // console.log(`contents: ${this.test}`);
      // console.log('after');
    }
  }
})

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `,
})
var app14 = new Vue({
  el: '#app-14',
  data: {
    searchText: 'sample'
  },
  methods: {
    sampleEventHander: function() {
      console.log(`sample event fired`);
    }
  }
});
