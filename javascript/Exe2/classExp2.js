/* eslint-disable func-names */
class Box {
 
  check(checkId) {
    const index = Box.arrId.indexOf(checkId.id);
    console.log(index);
    if (index == -1) {
      if (checkId.id == "check8") {
        const len = Box.arrId.length;
        for (let i = 0; i < len; i += 1) {
          document.getElementById(Box.arrId[0]).checked = false;
          Box.arrId.shift();
        }
        Box.checkBox = 3;
      } else if (Box.checkBox > 0) {
        document.getElementById("check8").checked = false;

        document.getElementById(checkId.id).checked = true;
        Box.arrId.push(checkId.id);
        Box.checkBox -= 1;
      } else {
        document.getElementById(checkId.id).checked = false;
        alert("Only 3 days can be selected");
      }
    } else {
      Box.arrId.splice(index, 1);
      document.getElementById(checkId.id).checked = false;
      Box.checkBox += 1;
    }
  }
}
Box.arrId = [];
Box.checkBox = 3;
const objectDay = new Box();
const d = document.getElementsByClassName("day");
for (let i = 0; i < d.length; i += 1) {
  d[i].addEventListener("click", function() {
    objectDay.check(d[i]);
  });
}
