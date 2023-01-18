const babel = require("@babel/core");
const presetEnv = require("@babel/preset-env");

const modal = document.createElement("div");
modal.innerHTML = "Modal content";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.zIndex = "1";
modal.style.left = "0";
modal.style.top = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.overflow = "auto";
modal.style.backgroundColor = "rgba(0,0,0,0.4)";

const trigger = document.getElementById("my-element");
trigger.addEventListener("click", function() {
  modal.style.display = "block";
});

const closeButton = document.createElement("span");
closeButton.innerHTML = "&times;";
closeButton.style.color = "#fff";
closeButton.style.fontSize = "30px";
closeButton.style.fontWeight = "bold";
closeButton.style.position = "absolute";
closeButton.style.top = "10px";
closeButton.style.right = "25px";
closeButton.style.cursor = "pointer";
modal.appendChild(closeButton);

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

document.body.appendChild(modal);
