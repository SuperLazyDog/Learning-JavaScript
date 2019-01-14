(function () {
  "use strict";
  solution();
  function solution() {
    var body = {
    "app": 8,
    "id": 9
    };

    kintone.api(kintone.api.url('/k/v1/record', true), 'GET', body, function(resp) {
        // success
        console.log(resp);
        console.log(resp.record);
        console.log(resp.record.業務一覧);
        console.log(resp.record.業務一覧.value.length);
        var length = resp.record.業務一覧.value.length;
        var body2 = {
            "app": 10,
            "record": {
                "日付": {
                    "type": resp.record.日付.type,
                    "value": resp.record.日付.value
                },
                "担当者": {
                  "type": resp.record.担当者.type,
                  "value": resp.record.担当者.value
                },
                
            }
        };
        console.log(body2);
        for (var i = 0; i < length; i++) {
          console.log(resp.record.業務一覧.value[i]);
          // kintone.api(kintone.api.url('/k/v1/record', true), 'POST', body2, function(resp) {
          //     // success
          //     console.log(resp);
          // }, function(error) {
          //     // error
          //     console.log(error);
          // });
        }
    }, function(error) {
        // error
        console.log(error);
    });
  }
})();
