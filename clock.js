function PrintTime() {
  var target = document.getElementById("nowtime");
  var time = new Date();
  var year = time.getFullYear();
  var month = ("0" + (time.getMonth() + 1)).slice(-2);
  var date = ("0" + time.getDate()).slice(-2);
  var hour = ("0" + time.getHours()).slice(-2);
  var min = ("0" + time.getMinutes()).slice(-2);
  var sec = ("0" + time.getSeconds()).slice(-2);
  target.innerHTML =
    year + "/" + month + "/" + date + "/" + hour + ":" + min + ":" + sec;
}
setInterval(PrintTime, 1000);
