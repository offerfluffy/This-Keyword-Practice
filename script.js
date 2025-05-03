// This in global space is Global object (Window for browsers)
console.log(this);

// This in function scope is Object on which it is beign called
function talk(lang) {
  // this keyword is different everytime (dynamic)
  if (lang === "en") {
    console.log(this);
  } else {
    console.log("Tralala");
  }
}

const me = {
  name: "Kyrylo",
  talk: talk,
};

// Rule: Whoever is on the left side of the function invocation
me.talk("en");

// window.talk()
// In a strict mode doesnt work
talk("en");

// If you cant make function statement directly in objects intializer expression

const me2 = {
  name: "Kyrylo 2",
};

const me2Talk = talk.bind(me2);
// Sets this to a function and returns a new function

me2Talk("en");

talk.bind(me2)("en"); // Same (IIF)

talk.call(me2, "en");
// Calling function immediately with this of passed object

talk.apply(me2, ["en"]);
// Same as call, but second  argument is array

function Person(n) {
  this.name = n;
  this.talk = function () {
    console.log(this);
  };

  setTimeout( // Can use arrow function also to fix
    function () {
      console.log(this); // Different scope (Event loop)
    }.bind(this) // Fix
    , 100
  );

  /* 
  this behaves differently based on context:

  Inside methods → refers to the object that called the method.

  Inside regular functions (like in setTimeout) → refers to global object unless explicitly bound.

  .bind(this) allows us to preserve the correct context of this.
  */
}

const you = new Person("U");
