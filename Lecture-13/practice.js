/************* Task 16 */
const task16 =()=> {
    const btn = document.querySelector("#task16");
    btn.addEventListener("click",(e)=>{
            // e.preventDefault();
            btn.innerHTML = "Clicked!";
        }
    )
}
task16();

/************* Task 17 */
const calculate = () => {
    document.querySelector("#calcForm").addEventListener("submit", (e)=>{
        e.preventDefault();
        const num1 = parseFloat(document.querySelector("#num1").value);
        const num2 = parseFloat(document.querySelector("#num2").value);
        const op = document.querySelector("#selectedOp").value;
        const resultField = document.querySelector("#result");
        let result;
        switch(op){
            case "add":
                result = num1 + num2;
                break;
      case "subtract":
        result = num1 - num2;
        break;
      case "divide":
        if (num2 === 0) {
          alert("Cannot divide by zero!");
          return;
        }
        result = num1 / num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      default:
        alert("Please select a valid operation.");
        return;
        }
        resultField.value = result;
    })
}
calculate();

/************* Task 18 */
document.addEventListener("DOMContentLoaded", ()=>{
    const userName = "admin";
    const password = "123";

    const form = document.querySelector("#loginForm");

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const eUser = document.querySelector("#username").value.trim();
    const ePass = document.querySelector("#password").value.trim();
    let msg = document.querySelector(".message");
        console.log("username",eUser);
        if(eUser === userName && ePass === password) 
        {
            msg.style.color = "green"
            msg.textContent = "Success!"
        }
        else
            alert("Incorrect Username or Password");
        
    })
})

/************* Task 19 */
document.addEventListener("DOMContentLoaded", () => {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(Math.floor(Math.random()*100));
    let attempts = 0;
    
    const guessInput = document.querySelector("#guessInput");
    const submitButton = document.querySelector("#submitGuess");
    const messageBox = document.querySelector("#message");
  
    submitButton.addEventListener("click", () => {
      const userGuess = parseInt(guessInput.value.trim());
      attempts++;
  
      // Check if the input is a valid number
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageBox.textContent = "Please enter a number between 1 and 100.";
        messageBox.className = "message error";
        return;
      }
  
      // Compare user's guess with the random number
      if (userGuess === randomNumber) {
        messageBox.textContent = `Correct! You guessed the number in ${attempts} attempts.`;
        messageBox.className = "message success";
        guessInput.disabled = true; // Disable further input
        submitButton.disabled = true; // Disable the submit button
      } else if (userGuess > randomNumber) {
        messageBox.textContent = "Too high! Try again.";
        messageBox.className = "message error";
      } else {
        messageBox.textContent = "Too low! Try again.";
        messageBox.className = "message error";
      }
  
      // Clear the input after each guess
      guessInput.value = "";
    });
  });


 