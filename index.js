const startBtn = document.querySelector("#start-btn");
const selectTruth = document.querySelector("#select-truth");
const selectDare = document.querySelector("#select-dare");
const challengeQ = document.querySelector("#challenge");
const welcome = document.querySelector("#welcome");
const selectAnOption = document.querySelector("#select-an-option");
const questionSection1 = document.querySelector("#question-section1");
const accept = document.querySelector("#accept");
const decline = document.querySelector("#decline");
const penalty = document.querySelector("#penalty");
const mustDo = document.querySelector("#must-do");
const back1 = document.querySelector("#back1");
const back2 = document.querySelector("#back2");
const backToHome = document.querySelector("#back-to-home");
const timer = document.querySelector("#timer");

console.log(startBtn);
console.log(selectAnOption);
console.log(questionSection1);

startBtn.addEventListener("click", () => {
  welcome.style.display = "none";
  selectAnOption.style.display = "block";
  selectAnOption.classList.add = "select-an-option";
  console.log(selectAnOption.classList);
});
selectTruth.addEventListener("click", () => {
  let t = Math.round(Math.random() * (challenge.truthquestions.length - 1));
  selectAnOption.style.display = "none";
  questionSection1.style.display = "block";
  challengeQ.innerHTML = `<h3 class ='challenge-header'>TRUTH<h3>
  ${challenge.truthquestions[t]}`;
  let time = 60;
  interval = setInterval(() => {
    time = time - 1;
    if (time === 0) {
      clearInterval(interval);
      showPenalty();
    }
    timer.innerHTML = `${time} seconds  <i class="fas fa-exclamation"></i>`;
  }, 1000);
});
selectDare.addEventListener("click", () => {
  let d = Math.round(Math.random() * (challenge.dares.length - 1));
  selectAnOption.style.display = "none";
  questionSection1.style.display = "block";
  challengeQ.innerHTML = `<h3 class ='challenge-header'>DARE<h3>
  ${challenge.dares[d]}`;
  let time = 60;
  interval = setInterval(() => {
    time = time - 1;
    if (time == 0) {
      clearInterval(interval);
      showPenalty();
    }
    timer.innerHTML = `${time} seconds  <i class="fas fa-exclamation"></i>`;
  }, 1000);
});
function showPenalty() {
  questionSection1.style.display = "none";
  penalty.style.display = "block";
  clearInterval(interval);
  let pay = Math.round(Math.random() * (challenge.penalty.length - 1));
  mustDo.innerHTML = `${challenge.penalty[pay]}`;
}
decline.addEventListener("click", showPenalty);
accept.addEventListener("click", () => {
  questionSection1.style.display = "none";
  selectAnOption.style.display = "block";
  clearInterval(interval);
  let t = Math.round(Math.random() * (challenge.truthquestions.length - 1));
  let d = Math.round(Math.random() * (challenge.dares.length - 1));
  let pay = Math.round(Math.random() * (challenge.penalty.length - 1));
});
back1.addEventListener("click", () => {
  selectAnOption.style.display = "none";
  welcome.style.display = "block";
});
back2.addEventListener("click", () => {
  let t = Math.round(Math.random() * (challenge.truthquestions.length - 1));
  let d = Math.round(Math.random() * (challenge.dares.length - 1));
  clearInterval(interval);
  timer.innerHTML = ``;
  questionSection1.style.display = "none";
  selectAnOption.style.display = "block";
});
backToHome.addEventListener("click", () => {
  penalty.style.display = "none";
  selectAnOption.style.display = "block";
});
