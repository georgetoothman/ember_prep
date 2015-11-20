function Person(name, friends){
  this.name = name;
  this.friends = friends;
}

Person.prototype.describe = function () {
  this.friends.forEach((friend) => {
    console.log(`${this.name} is a friend with ${friend}`);
  })
};

var george = new Person("George", ["Name", "Other_Name"]);