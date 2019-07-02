class Box {
  myFunction(x, i) {
    const parent = document.getElementById("d1");
    const d = parent.getElementsByTagName("div");
    if (document.getElementById(x).checked) {
      d[i].style.display = "block";
      let child=d[i].getElementsByTagName("input");
      for (let j = 0; j < child.length; j++) {
        child[j].checked = true;
      }
      d[i].scrollIntoView();
    } else {
      d[i].style.display = "none";

      const a = document.getElementsByTagName("input");
      for (let j = 0; j < a.length; j++) {
        a[j].checked = false;
      }
    }
  }
}
const object1 = new Box();
const d = document.getElementsByClassName("drag");
for (let j = 0; j < d.length; j++) {
  d[j].addEventListener("click", function() {
    object1.myFunction(d[j].id, j);
  });
}
