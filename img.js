var src_img = new Array(
  "画/のの3.png",
  "画/のの1.png",
  "画/マキノ1.png",
  "画/マキノ4.png",
  "画/肇1.png",
  "画/肇3.png",
  "画/ゆい1.png",
  "画/ゆい4.png",
  "画/飛鳥1.png",
  "画/飛鳥3.png",
  "画/椿1.png",
  "画/椿2.png",
  "画/佐久間1.png",
  "画/佐久間4.png",
  "画/新田1.png",
  "画/新田14.jpg",
  "画/村上6.png",
  "画/村上7.png",
  "画/松尾4.png",
  "画/松尾5.png",
  "画/今井1.png",
  "画/今井3.png",
  "画/有香1.png",
  "画/有香5.png",
  "画/赤城1.png",
  "画/赤城4.png",
  "画/城ケ崎1.png",
  "画/城ケ崎3.png",
  "画/城ケ崎2.png",
  "画/城ケ崎4.png",
);
var text_src = new Array(
  "<h2>トップ写真:のの岳駅に「のの」だけ・・・</h2>",
  "<h2>トップ写真:八神マキノのマキノ探訪</h2>",
  "<h2>トップ写真:肇ちゃんと「山紫水明」紀行</h2>",
  "<h2>トップ写真:ゆいのシーサイドトラベル</h2>",
  "<h2>トップ写真:「飛鳥」と古墳 from奈良</h2>",
  "<h2>トップ写真:紀伊半島南の温泉地で・・・</h2>",
  "<h2>トップ写真:静岡の山奥にまゆちゃんと・・・</h2>",
  "<h2>トップ写真:美波ちゃんの新田駅アタック</h2>",
  "<h2>トップ写真:村上駅じゃ！お嬢降臨じゃ！</h2>",
  "<h2>トップ写真:千鶴ちゃんと松尾と神社</h2>",
  "<h2>トップ写真:かなかなトラベル今井駅！</h2>",
  "<h2>トップ写真:有香ちゃんと中野の下町だより</h2>",
  "<h2>トップ写真:みりあ、赤城でダムを見たよ！</h2>",
  "<h2>トップ写真:カリスマギャルの海岸ショータイム</h2>",
  "<h2>トップ写真:ちびギャルだって負けないんだから！</h2>"
);

function imgturn() {
  var target = document.getElementById("nowimg");
  var target2 = document.getElementById("nowtoptext");
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();
  switch (min % 5) {
    case 0:
      if (sec < 20) {
        target2.innerHTML = text_src[0];
      } else if (sec < 40) {
        target2.innerHTML = text_src[1];
      } else {
        target2.innerHTML = text_src[2];
      }
      break;

    case 1:
      if (sec < 20) {
        target2.innerHTML = text_src[3];
      } else if (sec < 40) {
        target2.innerHTML = text_src[4];
      } else {
        target2.innerHTML = text_src[5];
      }
      break;

    case 2:
      if (sec < 20) {
        target2.innerHTML = text_src[6];
      } else if (sec < 40) {
        target2.innerHTML = text_src[7];
      } else {
        target2.innerHTML = text_src[8];
      }
      break;

    case 3:
      if (sec < 20) {
        target2.innerHTML = text_src[9];
      } else if (sec < 40) {
        target2.innerHTML = text_src[10];
      } else {
        target2.innerHTML = text_src[11];
      }
      break;

    default:
      if (sec < 20) {
        target2.innerHTML = text_src[12];
      } else if (sec < 40) {
        target2.innerHTML = text_src[13];
      } else {
        target2.innerHTML = text_src[14];
      }
      break;
  }
  target.src = src_img[Math.floor(sec / 10) + (min % 5) * 6];
}
setInterval(imgturn, 1000);
