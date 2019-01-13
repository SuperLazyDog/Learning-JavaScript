(function () {
  "use strict";
  solution();
  function solution() {
    // kintone.events.on("app.record.create.submit.success", function (event) {
    //   console.log("success add new one");
    //   alert(event.record.業務一覧.value);
    //   alert(event.record.業務一覧.length);
    // });


    var body = {
    "app": 8,
    "id": 9
    };

    kintone.api(kintone.api.url('/k/v1/record', true), 'GET', body, function(resp) {
        // success
        console.log(resp);
    }, function(error) {
        // error
        console.log(error);
    });
  }
})();
