class Form {
    constructor() {
      this.numid = document.getElementById("numId");
      this.resid = document.getElementById("resId");
      this.subid = $("#subId");
    }
  
    myFunction(e) {
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(this.numid.value)) {
        this.resid.value = "false";
        e.preventDefault();
      } else {
        this.resid.value = "true";
      }
    }
  
    display() {
      this.subid.click(this.myFunction.bind(this));
    }
  }
  const object1 = new Form();
  object1.display();
  