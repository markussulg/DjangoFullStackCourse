var simple = {
  prop : "Hello",
  myMethod: function() {
    console.log("myMethod was called")
  }
}
simple.myMethod()

var myObj = {
  name : "Jose",
  greet : function() {
    console.log("Hello " + this.name)
  }
}
console.log(myObj["name"])
myObj.greet()
