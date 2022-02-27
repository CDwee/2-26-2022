// Started at 1:14 2-26-2022

@import url("https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: "Press Start 2P", sans-serif;
  background-color: blue;
}

/* LAYOUT */
header {
  position: relative;
  height: 35vh;
}

main {
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.left {
  position: relative;
  left: 50%;
  right: 50%;
  bottom: 80%;
}

/* ELEMENTS STYLE */
h1 {
  font-size: 3rem;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 10rem;
  left: 20rem;
  right: 30%;
  transform: translate(-50%, -50%);
}

.between {
  font-size: 1.4rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.btn--again {
  position: absolute;
  top: 1px;
  left: 0.5px;
}

.btn {
  border: none;
  background-color: #eee;
  color: #222;
  font-size: 2rem;
  font-family: inherit;
  padding: 2rem 3rem;
  cursor: pointer;
}

.btn:hover {
  background-color: #ccc;
}

.message {
  margin-bottom: 8rem;
  height: 3rem;
}

p.label-score {
  position: absolute;
  bottom: 40rem;
  right: 0.4rem;
  text-align: center;
  font-size: 75px;
}

.park--park-1 {
  border: none;
  position: absolute;
  top: 19.7rem;
  right: 5.4rem;
  background-color: white;
  color: #222;
  font-family: inherit;
  padding: 1rem 2rem;
  cursor: pointer;
}

.park--park-2 {
  border: none;
  position: absolute;
  top: 23.4rem;
  right: 6.8rem;
  background-color: white;
  color: #222;
  font-family: inherit;
  padding: 1rem 2rem;
  cursor: pointer;
}

.park--park-3 {
  border: none;
  position: absolute;
  top: 27rem;
  right: 4rem;
  background-color: white;
  color: #222;
  font-family: inherit;
  padding: 1rem 2rem;
  cursor: pointer;
}

.park--park-4 {
  border: none;
  position: absolute;
  top: 31.95rem;
  right: 7rem;
  background-color: white;
  color: #222;
  font-family: inherit;
  padding: 1.5rem 2rem;
  cursor: pointer;
}

.park--park-5 {
  border: none;
  position: absolute;
  top: 38rem;
  right: 4rem;
  background-color: white;
  color: #222;
  font-family: inherit;
  padding: 1.5rem 2rem;
  cursor: pointer;
}

.park--park-6 {
  border: none;
  position: absolute;
  top: 44rem;
  right: 4rem;
  background-color: white;
  color: #222;
  font-family: inherit;
  padding: 1.5rem 2rem;
  cursor: pointer;
}

.batn {
  bottom: 10%;
}

.park {
  position: absolute;
  top: 48rem;
  left: 0.02rem;
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.2);
}

.park--park-1:hover {
  background-color: #ccc;
}

.park--park-2:hover {
  background-color: #ccc;
}

.park--park-3:hover {
  background-color: #ccc;
}

.park--park-4:hover {
  background-color: #ccc;
}

.park--park-5:hover {
  background-color: #ccc;
}

.park--park-6:hover {
  background-color: #ccc;
}

.btn--again:hover {
  background-color: #ccc;
}

.hidden {
  display: none;
}


// Ended at 2:30 2-26-2022

// Started at 8:12 2-26-2022

'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven';

            // Reasssinging out scope's variable
            output = 'NEW OUTPUT'
            

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();

    return age;
};

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

// Ended at 10:13 2-26-222
 
