const root = document.documentElement;
const slider = document.getElementById("progress");
const output = document.querySelector("output[for='progress']");
const buttons = [...document.querySelectorAll(".concept-button")];
const options = [...document.querySelectorAll(".visual-option")];
const rationaleIndex = document.querySelector(".rationale-index");
const rationaleCopy = document.querySelector(".concept-rationale p");

const rationales = [
  "Turns the chart into a credible investment signal: custom iconography, clearer hierarchy, and subtle risk/return context.",
  "Creates a more ownable first impression while keeping the motion calm, premium, and anchored to Berkocorp’s long time horizon.",
  "Makes the animation explain the investment approach—source differentiated managers, partner early, and compound value over time.",
];

let activeOption = 0;
let manualScrub = false;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function positionRocket(option, progress) {
  const path = option.querySelector("[data-path]");
  const rocket = option.querySelector("[data-rocket]");
  if (!path || !rocket) return;

  const length = path.getTotalLength();
  const position = path.getPointAtLength(length * progress);
  const ahead = path.getPointAtLength(Math.min(length, length * progress + 2));
  const angle = Math.atan2(ahead.y - position.y, ahead.x - position.x) * (180 / Math.PI);
  rocket.setAttribute("transform", `translate(${position.x} ${position.y}) rotate(${angle})`);
}

function setProgress(rawValue) {
  const value = clamp(Number(rawValue), 0, 100);
  const progress = value / 100;
  root.style.setProperty("--progress", progress.toFixed(4));
  slider.value = String(Math.round(value));
  output.value = `${Math.round(value)}%`;
  options.forEach((option) => positionRocket(option, progress));
}

function setOption(index) {
  activeOption = index;
  buttons.forEach((button, buttonIndex) => {
    const isActive = buttonIndex === index;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  options.forEach((option, optionIndex) => {
    const isActive = optionIndex === index;
    option.hidden = !isActive;
    option.classList.toggle("is-active", isActive);
  });

  rationaleIndex.textContent = `${String(index + 1).padStart(2, "0")} / 03`;
  rationaleCopy.textContent = rationales[index];
  const url = new URL(window.location.href);
  url.searchParams.set("option", String(index + 1));
  window.history.replaceState(null, "", url);
  positionRocket(options[index], Number(slider.value) / 100);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setOption(Number(button.dataset.option)));
});

slider.addEventListener("input", () => {
  manualScrub = true;
  setProgress(slider.value);
});

window.addEventListener("scroll", () => {
  if (manualScrub) return;
  const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  setProgress((window.scrollY / scrollable) * 100);
}, { passive: true });

window.addEventListener("resize", () => setProgress(slider.value));

const initialUrl = new URL(window.location.href);
const requestedOption = clamp(Number(initialUrl.searchParams.get("option") || 1) - 1, 0, 2);
const requestedProgress = clamp(Number(initialUrl.searchParams.get("progress") || slider.value), 0, 100);
setOption(requestedOption);
setProgress(requestedProgress);
