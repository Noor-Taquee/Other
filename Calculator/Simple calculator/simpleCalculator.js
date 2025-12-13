// #region Expression
let expression = "";

let expressionElement = document.getElementById("expression");
expressionElement.textContent = expression;

function addToExpression(part, operator = false) {
  if (operator) {
    const span = document.createElement("span");
    span.textContent = part;
    expressionElement.appendChild(span);
  } else {
    expression += part;
  }
  updateExpression();
}

function clearExpression() {
  expression = "";
  updateExpression();
  expressionElement.style.fontSize = `70px`;
}

function updateExpression() {
  expressionElement.textContent = expression;
  adjustFontSize();
  expressionElement.scrollLeft = expressionElement.scrollWidth;
}
// #endregion Expression

// #region Backspace button
let bnBackspace = document.getElementById("bn-backspace");
let deleteSpeed = 300;
let pressTimer1;
let pressTimer2;
let pressTimer3;
let repeatInterval1;
let repeatInterval2;
let repeatInterval3;
let increaseSpeed;

function cutExpression() {
  expression = expression.slice(0, -1);
  updateExpression();
}

function startRepeat1() {
  repeatInterval1 = setInterval(cutExpression, 300);
}
function startRepeat2() {
  repeatInterval2 = setInterval(cutExpression, 200);
}
function startRepeat3() {
  repeatInterval3 = setInterval(cutExpression, 50);
}

function handlePress() {
  cutExpression();
  pressTimer1 = setTimeout(() => {
    startRepeat1();
  }, 300);
  pressTimer2 = setTimeout(() => {
    clearInterval(repeatInterval1);
    startRepeat2();
  }, 1200);
  pressTimer3 = setTimeout(() => {
    clearInterval(repeatInterval3);
    startRepeat3();
  }, 1500);
}

function handleRelease() {
  clearTimeout(pressTimer1);
  clearTimeout(pressTimer2);
  clearTimeout(pressTimer3);
  clearInterval(repeatInterval1);
  clearInterval(repeatInterval2);
  clearInterval(repeatInterval3);
}

bnBackspace.addEventListener("touchstart", handlePress);
bnBackspace.addEventListener("touchend", handleRelease);
bnBackspace.addEventListener("mouseleave", handleRelease);
// #endregion Backspace button

// #region Font size
const MINIMUM_FONT_SIZE_PX = 25;
const DEFAULT_FONT_SIZE_PX = parseFloat(expressionElement.style.fontSize) || 70;
let currentFontSize = DEFAULT_FONT_SIZE_PX;

function adjustFontSize() {
  let currentFontSize =
    parseFloat(expressionElement.style.fontSize) || DEFAULT_FONT_SIZE_PX;

  if (checkOverflow(expressionElement)) {
    while (
      currentFontSize > MINIMUM_FONT_SIZE_PX &&
      checkOverflow(expressionElement)
    ) {
      currentFontSize -= 1;
      expressionElement.style.fontSize = `${currentFontSize}px`;
    }
    while (
      currentFontSize > MINIMUM_FONT_SIZE_PX &&
      checkOverflow(expressionElement)
    ) {
      currentFontSize -= 0.2;
      expressionElement.style.fontSize = `${currentFontSize}px`;
    }
    if (currentFontSize < MINIMUM_FONT_SIZE_PX) {
      expressionElement.style.fontSize = `${MINIMUM_FONT_SIZE_PX}px`;
    }
  } else if (currentFontSize < DEFAULT_FONT_SIZE_PX) {
    while (currentFontSize <= DEFAULT_FONT_SIZE_PX) {
      if (checkOverflow(expressionElement)) {
        expressionElement.style.fontSize = `${currentFontSize - 1}px`;
        break;
      } else {
        currentFontSize++;
        expressionElement.style.fontSize = `${currentFontSize}px`;
      }
    }
  }
}

function checkOverflow(element) {
  return element.scrollWidth > element.clientWidth;
}
// #endregion Font size