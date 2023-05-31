// import App from "./App";
import Logo from "./logo.svg";

let root;

function init() {
  root = document.getElementById("root");
  root.innerHTML = `
    <img src="${Logo}" alt="logo" />
    <h1>Learning webpack 5 today </h1>
    <button id="about"> About </button>
    <button  id="contact"> Contact </button>
    <div id="dynamic-content"></div>
    `;

  const aboutButton = document.querySelector("#about");
  aboutButton.addEventListener("click", dynamicallyLoadApp);
}

init();

function dynamicallyLoadApp() {
  const dynamicDiv = document.querySelector("#dynamic-content");

  import("./App").then(({ default: App }) => {
    dynamicDiv.innerHTML = ` ${App({ name: "jaynil" })}`;
  });
}
