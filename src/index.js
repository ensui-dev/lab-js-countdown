const DURATION = 10;
let remainingTime = DURATION;
let timer = null;

const startBtn = document.getElementById("start-btn");
const timeDisplay = document.getElementById("time");
const closeToastBtn = document.getElementById("close-toast");

let toastTimeout;

startBtn.disabled = false;



// ITERATION 1: Add event listener to the start button

startBtn.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startBtn.disabled = true;
  
  remainingTime = DURATION;
  timeDisplay.textContent = remainingTime;
  
  showToast("⏰ Final countdown! ⏰");
  
  timer = setInterval(() => {
    remainingTime--;
    
    timeDisplay.textContent = remainingTime;
    
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    
    if (remainingTime === 0) {
      clearInterval(timer);
      
      startBtn.disabled = false;
      
      showToast("Lift off! 🚀");
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toastElement = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  
  if (message) {
    toastMessage.textContent = message;
  }
  
  toastElement.classList.add("show");
  
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }
  
  toastTimeout = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  closeToastBtn.addEventListener("click", () => {
    clearTimeout(toastTimeout);
    toastElement.classList.remove("show");
  });
}