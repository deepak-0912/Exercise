class CreateDiv {
  static increaseDivNo() {
    this.div_no += 1;
  }

  static getDIvNo() {
    return this.div_no;
  }

  static setDivNo() {
    this.div_no = 0;
  }

  divFunctionCreate(parent_div) {
    const child = document.createElement("div");
    child.classList.add("inner");
    const div_content = document.createTextNode(CreateDiv.getDIvNo());
    // console.log(div_content);
    child.appendChild(div_content);
    CreateDiv.increaseDivNo();
    parent_div[0].appendChild(child);
    child.addEventListener("click", () => {
      // console.log(child);
      // console.log(this);
      alert(`Div no is =${child.innerHTML}`);
    });
  }
}
CreateDiv.div_no = 0;

const object1 = new CreateDiv();
const parent = document.getElementsByClassName("container");
const button = document.getElementById("button_id_1");
button.addEventListener("click", function() {
  object1.divFunctionCreate(parent);
});
