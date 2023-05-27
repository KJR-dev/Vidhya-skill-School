
  const profile = {
    userName: "Abhinav",
    getName: function () {
      console.log("1. This NF: ", this);

      const myAF = () => {
        console.log("2. This AF: ", this);
      };

      function tryMe() {
        console.log("3. This tryMe: ", this);
      }

      tryMe();
      myAF();
      return true;
    },
  };

  profile.getName();
  var _getName = profile.getName;
  //_getName();







  
  const profile = {
    userName: "Abhinav",
    getName: function () {
      console.log("1. This NF: ", this); // Profile

      const myAF = () => {
        console.log("2. This AF: ", this); // Profile

        function four() {
          console.log("3. This four: ", this); // Window
        }

        const five = () => {
          console.log("4. This four: ", this); // Profile
        };

        four();
        five();
      };

      function tryMe() {
        console.log("5. This tryMe: ", this); // Window

        const six = () => {
          console.log("6. This tryMe: ", this); // Window
        };

        six();
      }

      tryMe();
      myAF();
      return true;
    },
  };

  profile.getName();
  var _getName = profile.getName;
  //_getName();




 
  var userName = "Shubham";
  const profile = {
    userName: "Abhinav",
    getName: function () {
      console.log("This: ", this);
      return `My name is ${this.userName}`;
    },
  };

  console.log("1: ", profile.getName());
  const _getName = profile.getName;
  console.log("2: ", _getName());

