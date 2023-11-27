const MAX_LENGTH = {
  header: 60,
  content: 1024,
  footer: 60,
};
let intervalId;

function updatePreview(section) {
  const value = document.getElementById(section).value;

  document.getElementById(`preview-${section}`).textContent = value;
  document.getElementById(
    `${section}-length`
  ).textContent = `${value.length}/${MAX_LENGTH[section]}`;

  if (section === "content") {
    document.getElementById(
      "content-characters-length"
    ).textContent = `Characters: ${value.length}/1024`;
  }
}

function printTime() {
  const d = new Date();
  let hours = d.getHours();
  const mins = d.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  document.getElementById("timestamp").textContent = `${hours}:${mins
    .toString()
    .padStart(2, "0")} ${ampm}`;
}

window.onload = function () {
  printTime();
  intervalId = setInterval(printTime, 1000);

  const sections = ["header", "content", "footer"];
  sections.forEach((section) => {
    document.getElementById(section).addEventListener("input", function () {
      updatePreview(section);
    });
  });
};

window.onunload = function () {
  clearInterval(intervalId);
};
