var george = {
  name: "George",
  friends: ["Name", "Other_Name"],
  // describe: function(){
  describe(){
  //   var self = this;
  //   this.friends.forEach(function(friend){
  //     console.log(self.name + " is a friend" + friend);
  //   })
    this.friends.forEach((friend) => {
      // console.log(this.name + " is a friend to " + friend);
      console.log(`${this.name} is friends with ${friend}`);
    })
  }
}

george.describe();