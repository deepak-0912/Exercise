class Countdown {
  constructor() {
    this.buttonId = {
      // eslint-disable-next-line no-undef
      id: $("#buttonId"),
      status: true
    };
    this.block = $("#block");
    this.stop = null;

    this.buttonId.id.click(
      // eslint-disable-next-line func-names
      function() {
        if (this.buttonId.status) {
          this.timmer();
        } else {
          this.buttonId.status = true;
          this.buttonId.id.text("resume");
          clearInterval(this.stop);
        }
      }.bind(this)
    );
  }

  // eslint-disable-next-line class-methods-use-this
  timmer() {
    this.buttonId.status = false;
    this.buttonId.id.text("stop");
    this.stop = setInterval(
      // eslint-disable-next-line func-names
      function() {
        if (this.block.val() > 0) {
          let temp = this.block.val();
          temp--;
          this.block.val(temp);
        } else {
          clearInterval(this.stop);
          this.buttonId.id.text("start");
          this.block.val(" ");
          this.buttonId.status = true;
        }
      }.bind(this),
      1000
    );
  }
}
// eslint-disable-next-line no-unused-vars
const object1 = new Countdown();
