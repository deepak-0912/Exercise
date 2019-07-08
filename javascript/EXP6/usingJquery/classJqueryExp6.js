class createDiv {
  constructor(val) {
    this.btnId = $("#buttonid");
    this.parentDiv = $(".container");
    this.childDiv = $(".inner");
    this.divNo = val;
  }

  createDivChild() {
    const child = $("<div></div>").text(this.divNo++);
    child.addClass("inner");
    this.parentDiv.append(child);
    child.click(function() {
      alert(`Div no is =${child.html()}`);
    });
  }

  handler() {
    this.btnId.click(
      function() {
        this.createDivChild();
      }.bind(this)
    );
  }
}
const object1 = new createDiv(0);
object1.handler();
