//ELEMENTS
let main = document.getElementById("app");
let bn_account = document.getElementById("bn_account");
// bn_account.addEventListener("click", f_account);
let bn_delete = document.getElementById("bn_delete");
bn_delete.addEventListener("click", f_delete);
let bn_enter = document.getElementById("bn_enter");
bn_enter.addEventListener("click", f_enter);

//CREATING ELEMENTS
let accountInfoPanel = document.createElement("div");
accountInfoPanel.id = "accountInfoPanel";

let accountInfoDiv = document.createElement("div");
accountInfoDiv.id = "accountInfoDiv";
accountInfoPanel.appendChild(accountInfoDiv);

let accountPic = document.createElement("p");
accountInfoDiv.appendChild(accountPic);
accountPic.id = "accountPic";

let accountName = document.createElement("p");
accountName.id = "accountName";
accountInfoDiv.appendChild(accountName);
accountName.textContent = "NOOR TAQUEE";

let statsDiv = document.createElement("div");
statsDiv.id = "statsDiv";
accountInfoPanel.appendChild(statsDiv);

let winStat = document.createElement("p");
statsDiv.appendChild(winStat);
winStat.textContent = "WINS : 7";

let attemptStat = document.createElement("p");
statsDiv.appendChild(attemptStat);
attemptStat.textContent = "ATTEMPTS : 9";

let buttonDiv = document.createElement("div");
accountInfoPanel.appendChild(buttonDiv);
buttonDiv.id = "buttonDiv";

let bnClose = document.createElement("button");
buttonDiv.appendChild(bnClose);
bnClose.id = "bnClose";
bnClose.textContent = "CLOSE";
bnClose.addEventListener("click", f_close);

//VARIABLES
let infoShowing = false;
let targetWord = "PLAN";
let wordLength = 4;
let totalAttempts = 6;
let currentAttemptWord = "";
// let attemptBoxList1 = [attempt11, attempt12, attempt13, attempt14];
// let attemptBoxList2 = [attempt21, attempt22, attempt23, attempt24];
// let attemptBoxList3 = [attempt31, attempt32, attempt33, attempt34];
// let attemptBoxList4 = [attempt41, attempt42, attempt43, attempt44];
// let attemptBoxList5 = [attempt51, attempt52, attempt53, attempt54];
// let attemptBoxList6 = [attempt61, attempt62, attempt63, attempt64];
let attemptList = [
  attemptBoxList1,
  attemptBoxList2,
  attemptBoxList3,
  attemptBoxList4,
  attemptBoxList5,
  attemptBoxList6,
];
let currentBoxFocus = 0;
let currentListFocus = 0;
let win = false;
let lose = false;

//FUNCTIONS
function createAttemptPanel(rows, columns) {
  for (let row = 1; row <= rows; row++) {
    let attemptRow = document.createElement("div");
    attemptPanel.appendChild(attemptRow);
    attemptRow.id = "attemptRow";
    for (let column = 1; column <= columns; column++) {}
  }
}

function makeWord() {
  let newWord = "";
  for (let i = 0; i < wordLength; i++) {
    newWord += attemptList[currentListFocus][i].textContent;
  }
  return newWord;
}

function fillBox(letter) {
  if (!win && !lose) {
    if (currentBoxFocus < wordLength - 1) {
      if (attemptList[currentListFocus][currentBoxFocus].textContent == "") {
        attemptList[currentListFocus][currentBoxFocus].textContent = letter;
      }
      currentBoxFocus++;
    } else if (currentBoxFocus < wordLength) {
      if (attemptList[currentListFocus][currentBoxFocus].textContent == "") {
        attemptList[currentListFocus][currentBoxFocus].textContent = letter;
      }
    }
  }
}

function showResult() {
  let attemptPanel = document.getElementById("attemptPanel");
  let resultPanel = document.createElement("div");
  let resultMessage = document.createElement("p");
  resultPanel.id = "resultPanel";
  resultMessage.id = "resultMessage";
  if (win) {
    resultMessage.textContent = "GOOD JOB!";
  } else {
    resultMessage.textContent = `ATTEMPTS OVER!\nthe answer is\n ${targetWord}`;
  }
  attemptPanel.appendChild(resultPanel);
  resultPanel.appendChild(resultMessage);
}

//BUTTON FUNCTIONS
function f_delete() {
  if (!win && !lose) {
    currentLetter = attemptList[currentListFocus][currentBoxFocus].textContent;
    if (currentLetter.length == 0) {
      if (currentBoxFocus > 0) {
        currentBoxFocus--;
      }
    }
    attemptList[currentListFocus][currentBoxFocus].textContent = "";
  }
}

function f_enter() {
  if (!win && !lose) {
    currentAttemptWord = makeWord();
    if (currentAttemptWord.length == wordLength) {
      for (let i = 0; i < wordLength; i++) {
        if (currentAttemptWord[i] == targetWord[i]) {
          attemptList[currentListFocus][i].style.backgroundColor = "green";
        } else if (targetWord.includes(currentAttemptWord[i])) {
          attemptList[currentListFocus][i].style.backgroundColor = "orange";
        } else {
          attemptList[currentListFocus][i].style.backgroundColor = "grey";
        }
      }
      if (currentAttemptWord == targetWord) {
        win = true;
      } else if (currentListFocus < 5) {
        currentListFocus++;
        currentBoxFocus = 0;
      } else {
        lose = true;
      }
      if (win || lose) {
        showResult();
      }
    }
  }
}

function f_account() {
  if (!infoShowing) {
    main.appendChild(accountInfoPanel);
    accountInfoPanel.style.animation = "appear 0.5s ease-in-out";
    infoShowing = true;
    bn_account.removeEventListener("click", f_account);
    bn_account.addEventListener("click", f_close);
  }
}

function f_close() {
  if (infoShowing) {
    accountInfoPanel.style.animation = "disappear 0.5s ease-in-out";
    accountInfoPanel.addEventListener("animationend", function animateRem() {
      accountInfoPanel.removeEventListener("animationend", animateRem);
      main.removeChild(accountInfoPanel);
      infoShowing = false;
    });
    bn_account.removeEventListener("click", f_close);
    bn_account.addEventListener("click", f_account);
  }
}

bn_a.addEventListener("click", () => fillBox("A"));
bn_b.addEventListener("click", () => fillBox("B"));
bn_c.addEventListener("click", () => fillBox("C"));
bn_d.addEventListener("click", () => fillBox("D"));
bn_e.addEventListener("click", () => fillBox("E"));
bn_f.addEventListener("click", () => fillBox("F"));
bn_g.addEventListener("click", () => fillBox("G"));
bn_h.addEventListener("click", () => fillBox("H"));
bn_i.addEventListener("click", () => fillBox("I"));
bn_j.addEventListener("click", () => fillBox("J"));
bn_k.addEventListener("click", () => fillBox("K"));
bn_l.addEventListener("click", () => fillBox("L"));
bn_m.addEventListener("click", () => fillBox("M"));
bn_n.addEventListener("click", () => fillBox("N"));
bn_o.addEventListener("click", () => fillBox("O"));
bn_p.addEventListener("click", () => fillBox("P"));
bn_q.addEventListener("click", () => fillBox("Q"));
bn_r.addEventListener("click", () => fillBox("R"));
bn_s.addEventListener("click", () => fillBox("S"));
bn_t.addEventListener("click", () => fillBox("T"));
bn_u.addEventListener("click", () => fillBox("U"));
bn_v.addEventListener("click", () => fillBox("V"));
bn_w.addEventListener("click", () => fillBox("W"));
bn_x.addEventListener("click", () => fillBox("X"));
bn_y.addEventListener("click", () => fillBox("Y"));
bn_z.addEventListener("click", () => fillBox("Z"));

//KEYBINDINGS
document.addEventListener("keydown", (event) => {
  if (!win && !lose) {
    let keypress = event.key.toUpperCase();
    if (keypress.length == 1 && keypress >= "A" && keypress <= "Z") {
      fillBox(keypress);
    } else if (event.key === "Backspace") {
      f_delete();
    } else if (event.key === "Enter") {
      f_enter();
    }
  }
});
