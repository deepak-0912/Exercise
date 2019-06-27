class Block {
  swap1(x, y) {
    const index = x.selectedIndex;
    const optionArr = x.options;
    const childOption = document.createElement("option");
    childOption.text = optionArr[index].text;
    y.add(childOption);
    x.remove(index);
  }
}
const object1 = new Block();
const x = document.getElementById("s1");
const y = document.getElementById("s2");
console.log(x);
document.getElementById("in1").addEventListener("click", function() {
  object1.swap1(x, y);
});
document.getElementById("in2").addEventListener("click", function() {
  object1.swap1(y, x);
});
