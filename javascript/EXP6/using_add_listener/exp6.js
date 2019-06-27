const button_object_1 = document.getElementById("button_id_1");
let div_no = 0;
button_object_1.addEventListener("click", function() {
  myFunction();
});
function alert_fun() {
  alert(this.innerHTML);
}
function myFunction() {
  const div_object = document.getElementsByClassName("container");
  const div_child = document.createElement("div");
  div_child.classList.add("inner");
  // alert(div_no+"=No. div");
  div_child.addEventListener("click", alert_fun);
  const div_content = document.createTextNode(div_no);
  div_no++;
  div_child.appendChild(div_content);
  div_object[0].appendChild(div_child);
}
