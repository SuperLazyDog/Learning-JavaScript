tutorial_1();
function tutorial_1() {
  "use strict";
  changeFont();
  showTarget();
  function changeFont() {
    kintone.events.on("app.record.index.show", function (event) {
      var fontColor = "#ff0000";
      var elCustomer = kintone.app.getFieldElements('文字列__1行_');
      var elAccuracy = kintone.app.getFieldElements('ラジオボタン');
      for (var i = 0; i < elAccuracy.length; i++) {
        var record = event.records[i];
        if (record['ラジオボタン']['value'] == "A") {
            elCustomer[i].style.color = fontColor;
            elAccuracy[i].style.color = fontColor;
        }
      }
    });
  }
  function showTarget() {
    kintone.events.on('app.record.detail.show', function(event) {
      //表示したレコードの取得
      var record = event.record;
      //ユーザー数が500人以上であればメッセージを表示
      if (record['ユーザー数']['value'] >= 500) {
          alert("ユーザ数500人以上の案件です\n【見込み期限】" +　record['日付_0']['value']);
      }
    });
  }
}
