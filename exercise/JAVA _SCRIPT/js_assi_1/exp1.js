class User {

  constructor(name,age) {
    this.name = name;
    this.age=age;
  }

  compareAge(a) {
    if(a.age>this.age)
    {
     alert(a.name+" is older than "+this.name);
    }
    else
    {
     alert(this.name+" is older than "+a.name);
    }
  }

}

// Usage:
let user1 = new User("John",56);
let user2 = new User("Mary",34);
user1.compareAge(user2);