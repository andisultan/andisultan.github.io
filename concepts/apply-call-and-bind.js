// call
// The call() method is used to call a function with a given this value and arguments provided individually.
var user = {
  name: "Info World",
  whatIsYourName: function() {
  console.log(this.name);
  }
};

user.whatIsYourName(); // Output: "Info World",
var user2 = {
  name: "Hack Er"
};

user.whatIsYourName.call(user2); // Output: "Hack Er"

// apply
// The apply() method is similar to call() but the only difference is that it takes an array of arguments instead of comma separated values.
var user = {
  greet: "Hello!",
  greetUser: function(userName) {
  console.log(this.greet + " " + userName);
  }
};

var greet1 = {
  greet: "Hola"
};

user.greetUser.call(greet1,"InfoWorld") // Output: "Hola InfoWorld"
user.greetUser.apply(greet1,["InfoWorld"]) // Output: "Hola InfoWorld"

// bind
// bind returns a new function with the same body and scope as the original function,
var user = {
  greet: "Hello!",
  greetUser: function(userName) {
  console.log(this.greet + " " + userName);
  }
};

var greetHola = user.greetUser.bind({greet: "Hola"});
var greetBonjour = user.greetUser.bind({greet: "Bonjour"});

greetHola("InfoWorld") // Output: "Hola InfoWorld"
greetBonjour("InfoWorld") // Output: "Bonjour InfoWorld"