const header = document.querySelector("header");
const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

const headerContainerLeft = document.createElement("div");
headerContainerLeft.className = "header-left";

const imgEl = document.createElement("img");
imgEl.src = "../logo.png";

const h1El = document.createElement("h1");
h1El.textContent = "UnEarthed";

headerContainerLeft.appendChild(imgEl);
headerContainerLeft.appendChild(h1El);

const headerContainerRight = document.createElement("div");
headerContainerRight.className = "header-right";

const btnEl = document.createElement("button");
btnEl.textContent = "Home";

btnEl.addEventListener("click", () => {
  window.location = "/";
});

headerContainerRight.appendChild(btnEl);

headerContainer.appendChild(headerContainerLeft);
headerContainer.appendChild(headerContainerRight);

header.appendChild(headerContainer);
