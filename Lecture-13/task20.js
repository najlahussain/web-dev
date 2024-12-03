document.addEventListener("DOMContentLoaded", () => {
    // Randomly generated user data
    const userData = {
      userId: "user123",
      pin: "1234",
      balance: Math.floor(Math.random() * 10000) + 1000, // Random balance between 1000 and 10,000
    };
  
    // DOM elements
    const loginSection = document.querySelector("#loginSection");
    const atmSection = document.querySelector("#atmSection");
    const loginMessage = document.querySelector("#loginMessage");
    const atmMessage = document.querySelector("#atmMessage");
    const userIdInput = document.querySelector("#userId");
    const pinInput = document.querySelector("#pin");
  
    // ATM Buttons
    const loginButton = document.querySelector("#loginButton");
    const checkBalanceButton = document.querySelector("#checkBalance");
    const depositMoneyButton = document.querySelector("#depositMoney");
    const withdrawMoneyButton = document.querySelector("#withdrawMoney");
    const logoutButton = document.querySelector("#logoutButton");
  
    // Handle login
    loginButton.addEventListener("click", () => {
      const enteredUserId = userIdInput.value.trim();
      const enteredPin = pinInput.value.trim();
  
      if (enteredUserId === userData.userId && enteredPin === userData.pin) {
        loginSection.classList.add("hidden");
        atmSection.classList.remove("hidden");
        atmMessage.textContent = "Welcome to the ATM!";
        atmMessage.style.color = "green";
      } else {
        loginMessage.textContent = "Invalid User ID or PIN!";
        loginMessage.style.color = "red";
      }
    });
  
    // Check balance
    checkBalanceButton.addEventListener("click", () => {
      atmMessage.textContent = `Your current balance is $${userData.balance}.`;
      atmMessage.style.color = "blue";
    });
  
    // Deposit money
    depositMoneyButton.addEventListener("click", () => {
      const amount = parseFloat(prompt("Enter amount to deposit:"));
      if (isNaN(amount) || amount <= 0) {
        atmMessage.textContent = "Invalid deposit amount!";
        atmMessage.style.color = "red";
      } else {
        userData.balance += amount;
        atmMessage.textContent = `Deposit successful! New balance is $${userData.balance}.`;
        atmMessage.style.color = "green";
      }
    });
  
    // Withdraw money
    withdrawMoneyButton.addEventListener("click", () => {
      const amount = parseFloat(prompt("Enter amount to withdraw:"));
      if (isNaN(amount) || amount <= 0) {
        atmMessage.textContent = "Invalid withdrawal amount!";
        atmMessage.style.color = "red";
      } else if (amount > userData.balance) {
        atmMessage.textContent = "Insufficient funds!";
        atmMessage.style.color = "red";
      } else {
        userData.balance -= amount;
        atmMessage.textContent = `Withdrawal successful! New balance is $${userData.balance}.`;
        atmMessage.style.color = "green";
      }
    });
  
    // Log out
    logoutButton.addEventListener("click", () => {
      atmSection.classList.add("hidden");
      loginSection.classList.remove("hidden");
      userIdInput.value = "";
      pinInput.value = "";
      loginMessage.textContent = "";
      atmMessage.textContent = "";
    });
  });