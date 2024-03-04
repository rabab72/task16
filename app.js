      // CHAPTER 9-11 ---------- 
      // QUESTION#1

      document.write("Question #1 ");
      let cityName = prompt("Enter a city name:");

      if (cityName.toLowerCase() === "karachi") {
          alert("Welcome to the city of lights!");
      } else {
          alert("Welcome!");
      }

      // QUESTION#2
      document.write("Question #2")
          //   let gender = prompt("Enter your gender (male/female):");

      //   if (gender.toLowerCase() === "male") {
      //       alert("Good Morning Sir.");
      //   } else if (gender.toLowerCase() === "female") {
      //       alert("Good Morning Ma'am.");
      //   } else {
      //       alert("Good Morning!");
      //   }

      // QUESTION#3
      document.write("Question #3")
          //   let color = prompt("Enter the color of the traffic signal (red/yellow/green):");

      //   switch (color.toLowerCase()) {
      //       case "red":
      //           alert("Must Stop");
      //           break;
      //       case "yellow":
      //           alert("Ready to move");
      //           break;
      //       case "green":
      //           alert("Move now");
      //           break;
      //       default:
      //           alert("Invalid color entered");
      //   }
      // QUESTION#4
      document.write("Question #4")
          //   let remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

      //   if (remainingFuel < 0.25) {
      //       alert("Please refill the fuel in your car");
      //   } else {
      //       alert("You have enough fuel");
      //   }
      // QUESTION#5
      document.write("Question #5, a")
          //   var a = 4;
          //   if (++a === 5) {
          //       alert("given condition for variable a is true");
          //   }
          //   document.write("Question #5, b")
          //   var b = 82;
          //   if (b++ === 83) {
          //       alert("given condition for variable b is true");
          //   }
          //   document.write("Question #5, c")
          //   var c = 12;
          //   if (c++ === 13) {
          //       alert("condition 1 is true");
          //   }
          //   if (c === 13) {
          //       alert("condition 2 is true");
          //   }
          //   if (++c < 14) {
          //       alert("condition 3 is true");
          //   }
          //   if (c === 14) {
          //       alert("condition 4 is true");
          //   }
          //   document.write("Question #5, d")
          //   var materialCost = 20000;
          //   var laborCost = 2000;
          //   var totalCost = materialCost + laborCost;
          //   if (totalCost === laborCost + materialCost) {
          //       alert("The cost equals");
          //   }
          //   document.write("Question #5, e")
          //   if (true) {
          //       alert("True");
          //   }
          //   if (false) {
          //       alert("False");
          //   }

      //   if ("car" < "cat") {
      //       alert("car is smaller than cat");
      //   }
      //   document.write("Question #5, f")
      //   if ("car" < "cat") {
      //       alert("car is smaller than cat");
      //   }
      // QUESTION#6
      document.write("Question #6")

      //   function calculateGrade(percentage) {
      //       if (percentage >= 80) {
      //           return "A-one | Excellent";
      //       } else if (percentage >= 70) {
      //           return "A | Good";
      //       } else if (percentage >= 60) {
      //           return "B | Your need to improve";
      //       } else {
      //           return "Fail | Sorry";
      //       }
      //   }

      //   function calculatePercentage(marksObtained, totalMarks) {
      //       return (marksObtained / totalMarks) * 100;
      //   }

      //   let subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1:"));
      //   let subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2:"));
      //   let subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3:"));
      //   let totalMarks = parseFloat(prompt("Enter total marks:"));

      //   let totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
      //   let percentage = calculatePercentage(totalObtainedMarks, totalMarks);

      //   let grade = calculateGrade(percentage);

      //   document.write("<h2>Result:</h2>");
      //   document.write("<p>Total Marks: " + totalMarks + "</p>");
      //   document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>");
      //   document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
      //   document.write("<p>Grade: " + grade + "</p>");

      // QUESTION#7
      document.write("Question #7")

      //   let secretNumber = 7;
      //   let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

      //   if (userGuess === secretNumber) {
      //       alert("Bingo! Correct answer");
      //   } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
      //       alert("Close enough to the correct answer");
      //   } else {
      //       alert("Try again! The secret number was " + secretNumber);
      //   }

      // QUESTION#8
      document.write("Question #8")

      let number = parseInt(prompt("Enter a number:"));

      //   if (number % 3 === 0) {
      //       alert("The number is divisible by 3");
      //   } else {
      //       alert("The number is not divisible by 3");
      //   }
      // QUESTION#9
      document.write("Question #9")

      //   function checkNumber() {

      //       let number = document.getElementById("numberInput").value;

      //       if (!isNaN(number) && number !== "") {

      //           if (number % 2 === 0) {
      //               document.getElementById("result").innerText = number + " is an even number.";
      //           } else {
      //               document.getElementById("result").innerText = number + " is an odd number.";
      //           }
      //       } else {

      //           document.getElementById("result").innerText = "Please enter a valid number.";
      //       }
      //   }
      // QUESTION#10
      document.write("Question #10")

      //   let firstNumber = parseFloat(prompt("Enter the first number:"));
      //   let secondNumber = parseFloat(prompt("Enter the second number:"));
      //   let operation = prompt("Enter the operation (+, -, *, /, %):");

      //   let result;

      //   if (operation === "+") {
      //       result = firstNumber + secondNumber;
      //   } else if (operation === "-") {
      //       result = firstNumber - secondNumber;
      //   } else if (operation === "*") {
      //       result = firstNumber * secondNumber;
      //   } else if (operation === "/") {
      //       result = firstNumber / secondNumber;
      //   } else if (operation === "%") {
      //       result = firstNumber % secondNumber;
      //   } else {

      //       alert("Invalid operation");

      //       throw new Error("Invalid operation");
      //   }


      //   alert("Result: " + result);

      document.write("<h3>CHAPTER 9-11 (all 10 questions done)</h3><br>");

      //   CHAPTER#12 & 13--------------------------
      document.write("<h3>CHAPTER 12-13</h3><br>");
      //   question#1

      //   document.write("<h5>question#1</h5>");

      //   let char = prompt("Enter a character:");

      //   let charCode = char.charCodeAt(0);

      //   if (charCode >= 48 && charCode <= 57) {
      //       alert("The character is a number.");
      //   } else if (charCode >= 65 && charCode <= 90) {
      //       alert("The character is an uppercase letter.");
      //   } else if (charCode >= 97 && charCode <= 122) {
      //       alert("The character is a lowercase letter.");
      //   } else {
      //       alert("The character is not a number or a letter.");
      //   }
      //   question#2
      document.write("<h5>question#2</h5>");

      //   let firstnumber = parseInt(prompt("Enter the first integer:"));

      //   let secondnumber = parseInt(prompt("Enter the second integer:"));

      //   if (firstnumber === secondnumber) {
      //       alert("The two integers are equal.");
      //   } else {
      //       if (firstnumber > secondnumber) {
      //           alert("The larger integer is: " + firstnumber);
      //       } else {
      //           alert("The larger integer is: " + secondnumber);
      //       }
      //   }
      //   question#3
      document.write("<h5>question#3</h5>");

      //   let numberF = parseFloat(prompt("Enter a number:"));

      //   if (numberF > 0) {
      //       alert("The number is positive.");
      //   } else if (numberF < 0) {
      //       alert("The number is negative.");
      //   } else {
      //       alert("The number is zero.");
      //   }
      //   question#4
      document.write("<h5>question#4</h5>");

      //   function isVowel(char) {

      //       char = char.toLowerCase();

      //       return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
      //   }

      //   let character = prompt("Enter a character (string of length 1):");

      //   if (character.length === 1) {

      //       alert("Is '" + character + "' a vowel? " + isVowel(character));
      //   } else {
      //       alert("Please enter a single character.");
      //   }
      //   question#5
      document.write("<h5>question#5</h5>");

      //   let correctPassword = "mypassword";

      //   let userPassword = prompt("Enter your password:");

      //   if (!userPassword) {

      //       alert("Please enter your password.");
      //   } else if (userPassword === correctPassword) {

      //       alert("Correct! The password you entered matches the original password.");
      //   } else {

      //       alert("Incorrect password.");
      //   }
      //   question#6
      document.write("<h5>question#6</h5>");

      //   var greeting;
      //   var hour = 13;
      //   if (hour < 18) {
      //       greeting = "Good day";
      //   } else {
      //       greeting = "Good evening";
      //   }
      //   alert(greeting);

      //   question#7
      document.write("<h5>question#7</h5>");

      let time24 = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));

      let hour;
      let period;

      if (time24 >= 0 && time24 <= 2359) {
          if (time24 < 1200) {
              hour = Math.floor(time24 / 100);
              period = "am";
          } else {
              hour = Math.floor((time24 - 1200) / 100);
              period = "pm";
          }
          if (hour === 0) {
              hour = 12;
          }
          let minutes = time24 % 100;
          alert("The time in 12-hour clock format is: " + hour + ":" + (minutes < 10 ? "0" : "") + minutes + period);
      } else {
          alert("Invalid input. Please enter a time between 0000 and 2359.");
      }

      document.write("<h1>question (if statements</h1>");

      //   question#1
      document.write("<h5>question#1</h5>");
      var city = "Karachi";
      if (city === "Karachi") {
          console.log("The City of Lights");
      }
      //   question#2
      document.write("<h5>question#2</h5>");
      var x = ("z")
      var y = ("z")
      if (x === y) {
          let z = prompt("Enter the value of z:");

      }
      //   question#3
      document.write("<h5>question#3</h5>");

      let ZipCode = "10010";
      if (ZipCode === "10010") {
          alert("Karachi");
      } else {
          alert("Please write correct city");
      }
      //   question#4
      document.write("<h5>question#4</h5>");

      let x = 1;
      if (x === 1) {
          x = 2;
      }


      document.write("<h1>Chapter 11 (Comparison Operators)</h1>");
      //   question#1
      document.write("<h5>question#1</h5>");
      if (variable1 !== variable2) {
          // Code to be executed if variable1 is not equal to variable2
      }
      //   question#2
      document.write("<h5>question#2</h5>");

      let marks = parseInt(prompt("Enter your marks:"));

      let percentage = (marks / 100) * 100;

      let grade;
      if (percentage >= 90) {
          grade = "A+";
      } else if (percentage >= 80) {
          grade = "A";
      } else if (percentage >= 70) {
          grade = "B";
      } else if (percentage >= 60) {
          grade = "C";
      } else if (percentage >= 50) {
          grade = "D";
      } else {
          grade = "Fail";
      }

      console.log("Your percentage is: " + percentage.toFixed(2) + "%");
      console.log("Your grade is: " + grade);

      //   question#3
      document.write("<h5>question#3</h5>");
      if (a === 10) {
          alert("a is 10");
      } else {
          alert("The correct value of a is " + a);
      }

      //   question#4
      document.write("<h5>question#4</h5>");
      let city = prompt("Enter a city:");

      if (city.toLowerCase() === "karachi") {
          alert("Acknowledging it is Karachi.");
      } else if (city.toLowerCase() === "lahore") {
          alert("Acknowledging it's Lahore.");
      } else {
          alert("City not recognized.");
      }

      document.write("<h1>Chapter 13 (Testing sets of conditions)</h1>");
      //   question#1
      document.write("<h5>question#1</h5>");