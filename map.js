var text_src2 = new Array(
  "<p><strong>デレマスアイドル同名駅マップ</strong></p>",
  "<p><strong>ミリマスアイドル(AS+MS)+876プロアイドル同名駅マップ</strong></p>",
  "<p><strong>シャニマスアイドル同名駅マップ</strong></p>",
  "<p><strong>SideMアイドル同名駅マップ</strong></p>",
  "<p><strong>BanG Dream!キャラクター同名駅マップ</strong></p>",
  "<p><strong>ガールズ＆パンツァーキャラクター同名駅マップ</strong></p>",
);
var text_src3 = new Array(
  "<li>デレマスアイドル同名駅マップ</li>",
  "<li>ミリマスアイドル(AS+MS)+876プロアイドル同名駅マップ</li>",
  "<li>シャニマスアイドル同名駅マップ</li>",
  "<li>SideMアイドル同名駅マップ</li>",
  "<li>BanG Dream!キャラクター同名駅マップ</li>",
  "<li>ガールズ＆パンツァーキャラクター同名駅マップ</li>",
);
function mapturn() {
  var target3 = document.getElementById("mapprint");
  var target4 = document.getElementById("map");
  var target5 = document.getElementById("mapnowtitle");
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();
  switch (min % 3) {
    case 0:
      if (sec < 30) {
        target3.innerHTML = text_src2[0];
        target4.src =
          "https://www.google.com/maps/d/embed?mid=1v5z4lOl1pvq4nQkSFurahJ9E8qwg6kzS";
        target5.innerHTML =
          "<strong>" +
          text_src3[0] +
          "</strong>" +
          text_src3[1] +
          text_src3[2] +
          text_src3[3] +
          text_src3[4] +
          text_src3[5];
      } else {
        target3.innerHTML = text_src2[1];
        target4.src =
          "https://www.google.com/maps/d/embed?mid=1zooMKTibdwOkVjrzzcn7JjV7cR1HMFQs";
        target5.innerHTML =
          text_src3[0] +
          "<strong>" +
          text_src3[1] +
          "</strong>" +
          text_src3[2] +
          text_src3[3] +
          text_src3[4] +
          text_src3[5];
      }
      break;

    case 1:
      if (sec < 30) {
        target3.innerHTML = text_src2[2];
        target4.src =
          "https://www.google.com/maps/d/embed?mid=1ri2i_czLx1szQ4NpicuZlSzJJc1x4y4J";
        target5.innerHTML =
          text_src3[0] +
          text_src3[1] +
          "<strong>" +
          text_src3[2] +
          "</strong>" +
          text_src3[3] +
          text_src3[4] +
          text_src3[5];
      } else {
        target3.innerHTML = text_src2[3];
        target4.src =
          "https://www.google.com/maps/d/embed?mid=1FxFVFTKXT_P3CxElDhohRMx1QxOgDgOH";
        target5.innerHTML =
          text_src3[0] +
          text_src3[1] +
          text_src3[2] +
          "<strong>" +
          text_src3[3] +
          "</strong>" +
          text_src3[4] +
          text_src3[5];
      }
      break;
      
    case 2:
      if (sec < 30) {
        target3.innerHTML = text_src2[4];
        target4.src =
          "https://www.google.com/maps/d/embed?mid=1CIpb3xhZeUAo0hZZUu9gu2vixVe6Kf-m";
        target5.innerHTML =
          text_src3[0] +
          text_src3[1] +
          text_src3[2] +
          text_src3[3] +
          "<strong>" +
          text_src3[4] +
          "</strong>" +
          text_src3[5];
      } else {
        target3.innerHTML = text_src2[5];
        target4.src =
          "https://www.google.com/maps/d/embed?mid=1Y-xYTtKr5aDrFnS-vwPRHRyQElsIu6zG";
        target5.innerHTML =
          text_src3[0] +
          text_src3[1] +
          text_src3[2] +
          text_src3[3] +
          text_src3[4] +
          "<strong>" +
          text_src3[5] +
          "</strong>";
      }
      break;
  }
}
setTimeout(mapturn, 727);
setInterval(mapturn, 1000 * 30);
