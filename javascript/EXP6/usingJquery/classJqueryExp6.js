class createDiv {
  constructor(val) {
    // eslint-disable-next-line no-undef
    this.btnId = $("#buttonid");
    // eslint-disable-next-line no-undef
    this.parentDiv = $(".container");
    // eslint-disable-next-line no-undef
    this.childDiv = $(".inner");
    this.divNo = val;
  }

  // eslint-disable-next-line class-methods-use-this
  createDivChild() {
    const child = $("<div></div>").text(this.divNo++);
    child.addClass("inner");
    this.parentDiv.append(child);
    // eslint-disable-next-line func-names
    child.click(function() {
      // eslint-disable-next-line no-alert
      alert(`Div no is =${child.html()}`);
    });
  }

  handler() {
    this.btnId.click(
      // eslint-disable-next-line func-names
      function() {
        this.createDivChild();
      }.bind(this)
    );
  }
}
// eslint-disable-next-line new-cap
const object1 = new createDiv(0);
object1.handler();
