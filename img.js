var src_img = new Array(
  "画/のの3.png",
  "画/のの1.png",
  "画/マキノ1.png",
  "画/マキノ4.png",
  "画/肇1.png",
  "画/肇3.png"
);
var text_src = new Array(
  "<h2>トップ写真:のの岳駅に「のの」だけ・・・by森久保乃々</h2>",
  "<h2>トップ写真:八神マキノのマキノ探訪</h2>",
  "<h2>トップ写真:肇ちゃんと「山紫水明」紀行</h2>"
);

function imgturn() {
  var target = document.getElementById("nowimg");
  var target2 = document.getElementById("nowtoptext");
  var sec = new Date().getSeconds();
  if (sec < 20) {
    target2.innerHTML = text_src[0];
  } else if (sec < 40) {
    target2.innerHTML = text_src[1];
  } else {
    target2.innerHTML = text_src[2];
  }
  target.src = src_img[Math.floor(sec / 10)];
}
setInterval(imgturn, 1000);
