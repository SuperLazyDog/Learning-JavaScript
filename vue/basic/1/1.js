document.addEventListener("DOMContentLoaded", function () {
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


  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  });
  // 五秒間、1秒ごとに点滅
  var count = 0;
  var id = setInterval(function () {
    count += 1;
    if (count >= 5) {
      clearInterval(id);
    }
    app3.seen = !app3.seen;
  }, 1000);
});
