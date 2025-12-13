// #region Option panel
let optionPanel = document.getElementById("option-panel");
let bnOption = document.getElementById("options-btn");
bnOption.addEventListener("click", showOptionPanel);

function showOptionPanel() {
  bnOption.removeEventListener("click", showOptionPanel);
  optionPanel.style.display = "flex";
  optionPanel.style.animation = "appear 0.3s ease";
  optionPanel.addEventListener(
    "animationend",
    () => {
      optionPanel.style.animation = "none";
      bnOption.addEventListener("click", hideOptionPanel);
    },
    { once: true }
  );
}

function hideOptionPanel() {
  if ((optionPanel.style.display = "flex")) {
    bnOption.removeEventListener("click", hideOptionPanel);
    optionPanel.style.animation = "disappear 0.3s ease";
    optionPanel.addEventListener(
      "animationend",
      () => {
        optionPanel.style.animation = "none";
        optionPanel.style.display = "none";
        bnOption.addEventListener("click", showOptionPanel);
      },
      { once: true }
    );
  }
}
// #endregion Option panel

// #region Theme panel
let appliedTheme = "dark";
let appliedThemeI = null;
let selectedTheme = "dark";
let selectedThemeI = null;

let ThemePanel = document.getElementById("theme-panel");
let bnTheme = document.getElementById("theme-btn");
bnTheme.addEventListener("click", showThemePanel);

let cancelTheme = document.getElementById("cancel-btn-theme");
cancelTheme.addEventListener("click", hideThemePanel);

let confirmTheme = document.getElementById("confirm-btn-theme");
confirmTheme.addEventListener("click", applyTheme);

let bnDark = document.getElementById("dark-btn-theme");
let darkIcon = document.getElementById("dark-icon");
appliedThemeI = darkIcon;
selectedThemeI = darkIcon;
bnDark.addEventListener("click", () => {
  selectedThemeI.className = "ph-bold ph-circle";
  selectedTheme = "dark";
  selectedThemeI = darkIcon;
  selectedThemeI.className = "ph-fill ph-radio-button";
});

let bnLight = document.getElementById("light-btn-theme");
let lightIcon = document.getElementById("light-icon");
bnLight.addEventListener("click", () => {
  selectedThemeI.className = "ph-bold ph-circle";
  selectedTheme = "light";
  selectedThemeI = lightIcon;
  selectedThemeI.className = "ph-fill ph-radio-button";
});

function applyTheme() {
  app.classList.remove(appliedTheme);
  appliedThemeI = selectedThemeI;
  appliedTheme = selectedTheme;
  app.classList.add(appliedTheme);
  hideThemePanel();
  localStorage.setItem("theme", appliedTheme);
}

function showThemePanel() {
  hideOptionPanel();
  bnTheme.removeEventListener("click", showThemePanel);
  ThemePanel.style.display = "flex";
  ThemePanel.style.animation = "appear 0.3s ease";
  ThemePanel.addEventListener(
    "animationend",
    () => {
      ThemePanel.style.animation = "none";
      bnTheme.addEventListener("click", hideThemePanel);
    },
    { once: true }
  );
}

function hideThemePanel() {
  if (ThemePanel.style.display == "flex") {
    selectedThemeI.className = "ph-bold ph-circle";
    selectedThemeI = appliedThemeI;
    selectedThemeI.className = "ph-fill ph-radio-button";
    bnTheme.removeEventListener("click", hideThemePanel);
    ThemePanel.style.animation = "disappear 0.3s ease";
    ThemePanel.addEventListener(
      "animationend",
      () => {
        ThemePanel.style.animation = "none";
        ThemePanel.style.display = "none";
        bnTheme.addEventListener("click", showThemePanel);
      },
      { once: true }
    );
  }
}
// #endregion Theme panel

// #region Palette panel
let appliedPalette = "blue";
let appliedPaletteI = null;
let selectedPalette = "blue";
let selectedPaletteI = null;
let lastPalette = "blue";

let PalettePanel = document.getElementById("palette-panel");
let bnPalette = document.getElementById("palette-btn");
bnPalette.addEventListener("click", showPalettePanel);

let cancelPalette = document.getElementById("cancel-btn-palette");
cancelPalette.addEventListener("click", hidePalettePanel);

let confirmPalette = document.getElementById("confirm-btn-palette");
confirmPalette.addEventListener("click", applyPalette);

let bnBlue = document.getElementById("blue-btn-palette");
let blueIcon = document.getElementById("blue-icon");
selectedPaletteI = blueIcon;
appliedPaletteI = blueIcon;
bnBlue.addEventListener("click", () => {
  selectedPaletteI.className = "ph-bold ph-circle";
  selectedPalette = "blue";
  selectedPaletteI = blueIcon;
  selectedPaletteI.className = "ph-fill ph-radio-button";
});

let bnGreen = document.getElementById("green-btn-palette");
let greenIcon = document.getElementById("green-icon");
bnGreen.addEventListener("click", () => {
  selectedPaletteI.className = "ph-bold ph-circle";
  selectedPalette = "green";
  selectedPaletteI = greenIcon;
  selectedPaletteI.className = "ph-fill ph-radio-button";
});

let bnOrange = document.getElementById("orange-btn-palette");
let orangeIcon = document.getElementById("orange-icon");
bnOrange.addEventListener("click", () => {
  selectedPaletteI.className = "ph-bold ph-circle";
  selectedPalette = "orange";
  selectedPaletteI = orangeIcon;
  selectedPaletteI.className = "ph-fill ph-radio-button";
});

let bnMonochrome = document.getElementById("monochrome-btn-palette");
let monochromeIcon = document.getElementById("monochrome-icon");
bnMonochrome.addEventListener("click", () => {
  selectedPaletteI.className = "ph-bold ph-circle";
  selectedPalette = "monochrome";
  selectedPaletteI = monochromeIcon;
  selectedPaletteI.className = "ph-fill ph-radio-button";
});

function applyPalette() {
  app.classList.remove(appliedPalette);
  appliedPalette = selectedPalette;
  appliedPaletteI = selectedPaletteI;
  app.classList.add(appliedPalette);
  hidePalettePanel();
  localStorage.setItem("palette", appliedPalette);
}

function showPalettePanel() {
  hideOptionPanel();
  bnPalette.removeEventListener("click", showPalettePanel);
  PalettePanel.style.display = "flex";
  PalettePanel.style.animation = "appear 0.3s ease";
  PalettePanel.addEventListener(
    "animationend",
    () => {
      PalettePanel.style.animation = "none";
      bnPalette.addEventListener("click", hidePalettePanel);
    },
    { once: true }
  );
}

function hidePalettePanel() {
  if (PalettePanel.style.display == "flex") {
    selectedPaletteI.className = "ph-bold ph-circle";
    selectedPaletteI = appliedPaletteI;
    selectedPaletteI.className = "ph-fill ph-radio-button";
    bnPalette.removeEventListener("click", hidePalettePanel);
    PalettePanel.style.animation = "disappear 0.3s ease";
    PalettePanel.addEventListener(
      "animationend",
      () => {
        PalettePanel.style.animation = "none";
        PalettePanel.style.display = "none";
        bnPalette.addEventListener("click", showPalettePanel);
      },
      { once: true }
    );
  }
}
// #endregion Palette panel

// #region Shape panel
let appliedShape = "squircle";
let appliedShapeI = null;
let selectedShape = "squircle";
let selectedShapeI = null;

let ShapePanel = document.getElementById("shape-panel");
let bnShape = document.getElementById("shape-btn");
bnShape.addEventListener("click", showShapePanel);

let cancelShape = document.getElementById("cancel-btn-shape");
cancelShape.addEventListener("click", hideShapePanel);

let confirmShape = document.getElementById("confirm-btn-shape");
confirmShape.addEventListener("click", applyShape);

let bnSquircle = document.getElementById("squircle-btn-shape");
let squircleIcon = document.getElementById("squircle-icon");
appliedShapeI = squircleIcon;
selectedShapeI = squircleIcon;
bnSquircle.addEventListener("click", () => {
  selectedShapeI.className = "ph-bold ph-circle";
  selectedShape = "squircle";
  selectedShapeI = squircleIcon;
  selectedShapeI.className = "ph-fill ph-radio-button";
});

let bnCircle = document.getElementById("circle-btn-shape");
let circleIcon = document.getElementById("circle-icon");
bnCircle.addEventListener("click", () => {
  selectedShapeI.className = "ph-bold ph-circle";
  selectedShape = "circle";
  selectedShapeI = circleIcon;
  selectedShapeI.className = "ph-fill ph-radio-button";
});

function applyShape() {
  app.classList.remove(appliedShape);
  appliedShape = selectedShape;
  appliedShapeI = selectedShapeI;
  app.classList.add(appliedShape);
  hideShapePanel();
  localStorage.setItem("shape", appliedShape);
}

function showShapePanel() {
  hideOptionPanel();
  bnShape.removeEventListener("click", showShapePanel);
  ShapePanel.style.display = "flex";
  ShapePanel.style.animation = "appear 0.3s ease";
  ShapePanel.addEventListener(
    "animationend",
    () => {
      ShapePanel.style.animation = "none";
      bnShape.addEventListener("click", hideShapePanel);
    },
    { once: true }
  );
}

function hideShapePanel() {
  if (ShapePanel.style.display == "flex") {
    selectedShapeI.className = "ph-bold ph-circle";
    selectedShapeI = appliedShapeI;
    selectedShapeI.className = "ph-fill ph-radio-button";
    bnShape.removeEventListener("click", hideShapePanel);
    ShapePanel.style.animation = "disappear 0.3s ease";
    ShapePanel.addEventListener(
      "animationend",
      () => {
        ShapePanel.style.animation = "none";
        ShapePanel.style.display = "none";
        bnShape.addEventListener("click", showShapePanel);
      },
      { once: true }
    );
  }
}
// #endregion Shape panel

// #region Local storage
function checkLocalStorage() {
  updateUI(
    localStorage.getItem("theme"),
    localStorage.getItem("palette"),
    localStorage.getItem("shape")
  );
}

function updateUI(theme, palette, shape) {
  let themeMap = { "light": lightIcon, "dark": darkIcon };
  let paletteMap = {
    "blue": blueIcon,
    "green": greenIcon,
    "orange": orangeIcon,
    "monochrome": monochromeIcon,
  };
  let shapeMap = { "squircle": squircleIcon, "circle": circleIcon };
  if (theme) {
    selectedThemeI.className = "ph-bold ph-circle";
    selectedThemeI = themeMap[theme];
    selectedTheme = theme;
    selectedThemeI.className = "ph-fill ph-radio-button";
    applyTheme();
  }
  if (palette) {
    selectedPaletteI.className = "ph-bold ph-circle";
    selectedPaletteI = paletteMap[palette];
    selectedPalette = palette;
    selectedPaletteI.className = "ph-fill ph-radio-button";
    applyPalette();
  }
  if (shape) {
    selectedShapeI.className = "ph-bold ph-circle";
    selectedShape = shape;
    selectedShapeI = shapeMap[shape];
    selectedShapeI.className = "ph-fill ph-radio-button";
    applyShape();
  }
}

checkLocalStorage();

const buttons = document.querySelectorAll(".ripple");
buttons.forEach((button) => setRippleStyle(button));
function setRippleStyle(button) {
  button.addEventListener("click", function (event) {
    let circle = document.createElement("span");
    circle.classList.add("ripple-span");

    let rect = button.getBoundingClientRect();
    let diameter = Math.max(rect.width, rect.height);
    let radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;

    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;

    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
}
// #endregion Local storage
