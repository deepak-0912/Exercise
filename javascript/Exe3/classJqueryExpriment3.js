class CheckBoxes {
  constructor() {
    // eslint-disable-next-line no-undef
    this.parent = $("#parent");
    // eslint-disable-next-line no-undef
    this.list = $(".drag");
  }

  dropManu(item) {
    const selectDiv = this.parent.find("div");
    // eslint-disable-next-line no-undef
    const child = $(selectDiv[item]).find("input");
    if (this.list[item].checked) {
      selectDiv[item].style.display = "block";
      // console.log(selectDiv[item]);

      for (let i = 0; i < child.length; i++) {
        child[i].checked = true;
      }
      selectDiv[item].scrollIntoView();
    } else {
      selectDiv[item].style.display = "none";
      for (let i = 0; i < child.length; i++) {
        child[i].checked = false;
      }
    }
  }

  selectCheck() {
    for (let i = 0; i < this.list.length; i++) {
      this.list[i].addEventListener(
        "click",
        // eslint-disable-next-line func-names
        function() {
          this.dropManu(i);
        }.bind(this)
      );
    }
  }
}
const object1 = new CheckBoxes();
object1.selectCheck();
