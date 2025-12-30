const app = document.getElementById("app");

// #region Tools panel
const toolsPanel = document.getElementById("tools-panel");
// #endregion Tools panel

// #region Option panel
const optionPanel = document.getElementById("option-panel");
const bnOption = document.getElementById("options-btn");
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

const ThemePanel = document.getElementById("theme-panel");
const bnTheme = document.getElementById("theme-btn");
bnTheme.addEventListener("click", showThemePanel);

const cancelTheme = document.getElementById("cancel-btn-theme");
cancelTheme.addEventListener("click", hideThemePanel);

const confirmTheme = document.getElementById("confirm-btn-theme");
confirmTheme.addEventListener("click", applyTheme);

const bnDark = document.getElementById("dark-btn-theme");
const darkIcon = document.getElementById("dark-icon");
appliedThemeI = darkIcon;
selectedThemeI = darkIcon;
bnDark.addEventListener("click", () => {
  selectedThemeI.className = "ph-bold ph-circle";
  selectedTheme = "dark";
  selectedThemeI = darkIcon;
  selectedThemeI.className = "ph-fill ph-radio-button";
});

const bnLight = document.getElementById("light-btn-theme");
const lightIcon = document.getElementById("light-icon");
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

const PalettePanel = document.getElementById("palette-panel");
const bnPalette = document.getElementById("palette-btn");
bnPalette.addEventListener("click", showPalettePanel);

const cancelPalette = document.getElementById("cancel-btn-palette");
cancelPalette.addEventListener("click", hidePalettePanel);

const confirmPalette = document.getElementById("confirm-btn-palette");
confirmPalette.addEventListener("click", applyPalette);

const bnBlue = document.getElementById("blue-btn-palette");
const blueIcon = document.getElementById("blue-icon");
selectedPaletteI = blueIcon;
appliedPaletteI = blueIcon;
bnBlue.addEventListener("click", () => {
  selectedPaletteI.className = "ph-bold ph-circle";
  selectedPalette = "blue";
  selectedPaletteI = blueIcon;
  selectedPaletteI.className = "ph-fill ph-radio-button";
});

const bnGreen = document.getElementById("green-btn-palette");
const greenIcon = document.getElementById("green-icon");
bnGreen.addEventListener("click", () => {
  selectedPaletteI.className = "ph-bold ph-circle";
  selectedPalette = "green";
  selectedPaletteI = greenIcon;
  selectedPaletteI.className = "ph-fill ph-radio-button";
});

const bnOrange = document.getElementById("orange-btn-palette");
const orangeIcon = document.getElementById("orange-icon");
bnOrange.addEventListener("click", () => {
  selectedPaletteI.className = "ph-bold ph-circle";
  selectedPalette = "orange";
  selectedPaletteI = orangeIcon;
  selectedPaletteI.className = "ph-fill ph-radio-button";
});

const bnMonochrome = document.getElementById("monochrome-btn-palette");
const monochromeIcon = document.getElementById("monochrome-icon");
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

const ShapePanel = document.getElementById("shape-panel");
const bnShape = document.getElementById("shape-btn");
bnShape.addEventListener("click", showShapePanel);

const cancelShape = document.getElementById("cancel-btn-shape");
cancelShape.addEventListener("click", hideShapePanel);

const confirmShape = document.getElementById("confirm-btn-shape");
confirmShape.addEventListener("click", applyShape);

const bnSquircle = document.getElementById("squircle-btn-shape");
const squircleIcon = document.getElementById("squircle-icon");
appliedShapeI = squircleIcon;
selectedShapeI = squircleIcon;
bnSquircle.addEventListener("click", () => {
  selectedShapeI.className = "ph-bold ph-circle";
  selectedShape = "squircle";
  selectedShapeI = squircleIcon;
  selectedShapeI.className = "ph-fill ph-radio-button";
});

const bnCircle = document.getElementById("circle-btn-shape");
const circleIcon = document.getElementById("circle-icon");
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
