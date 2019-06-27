class Time {
  constructor() {
    this.numid = document.getElementById("numId");
    this.startid = document.getElementById("startId");
    this.stopid = document.getElementById("stopId");
    this.var;
    this.a = 0;
  }

  decrement() {
    this.numid.value -= 1;

    if (this.numid.value <= 0) {
      clearInterval(this.var);
    }
  }

  stop() {
    clearInterval(this.var);
    this.startid.innerHTML = "Resume";
    this.stopid.style.display = "none";
    this.startid.style.display = "block";
  }

  start(e) {
    if (isNaN(this.numid.value)) {
      alert("enter the integer value");
      return;
    }
    e.preventDefault();
    this.startid.style.display = "none";
    this.stopid.style.display = "block";
    this.var = setInterval(this.decrement.bind(this), 1000);
    this.stopid.addEventListener("click", this.stop.bind(this));
  }

  clickHandler() {
    this.startid.addEventListener("click", this.start.bind(this));
  }
}

const object1 = new Time();
object1.clickHandler();
