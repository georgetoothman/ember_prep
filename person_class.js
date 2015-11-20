class Person{
  constructor(name, friends){
    this.name = name;
    this.friends = friends;
  }

  describe(){
    this.friends.forEach((friend) => {
      console.log(`${this.name} is friends with ${friend}`);
    });
  }
}

var george = new Person("Steven", ["Name", "Other_Name"])