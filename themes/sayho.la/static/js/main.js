const svgCopy =
  '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>';
const svgCheck =
  '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" fill="rgb(63, 185, 80)" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>';

const sayholaPop = '<div><span class="sayhola-pop">Say Hola!</span></div>'

const addCopyButtons = (clipboard) => {
  document.querySelectorAll("div.sayhola > a").forEach((codeBlock) => {

    const button = document.createElement("button");
    button.className = "clipboard-button";
    button.type = "button";
    button.innerHTML = svgCopy;
    button.addEventListener("click", () => {
      clipboard.writeText(codeBlock.href).then(
        () => {
          button.blur();
          button.innerHTML = sayholaPop + svgCheck;
          setTimeout(() => (button.innerHTML = svgCopy), 550);
        },
        (error) => (button.innerHTML = "Error")
      );
    });

    codeBlock.parentNode.insertBefore(button, codeBlock);
  });
};

if (navigator && navigator.clipboard) {
  addCopyButtons(navigator.clipboard);
} else {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js";
  script.integrity = "sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=";
  script.crossOrigin = "anonymous";
  script.onload = () => addCopyButtons(clipboard);
  document.body.appendChild(script);
}

var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");
toggle.addEventListener("click", () => {
    if (toggle.className === "fal fa-moon-o") {
        setTheme("dark");
    } else if (toggle.className === "fal fa-sun-o") {
        setTheme("light");
    }
});
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setTheme("dark");
} else {
  setTheme("light");
}

function setTheme(mode) {
  if (mode === "dark") {
      darkTheme.disabled = false;
      toggle.className = "fal fa-sun-o";
  } else if (mode === "light") {
      darkTheme.disabled = true;
      toggle.className = "fal fa-moon-o";
  }
}
