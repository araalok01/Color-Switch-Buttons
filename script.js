const btns = document.querySelectorAll(".button");
const body = document.querySelector("body");
btns.forEach(function(button) {
  button.addEventListener("click", function(btn) {
    if (btn.target.id == 'grey') {
      document.querySelector("body").style.backgroundColor = btn.target.id
    }
    if (btn.target.id == 'blue') {
      document.querySelector("body").style.backgroundColor = btn.target.id
    }
    if (btn.target.id == 'red') {
      document.querySelector("body").style.backgroundColor = btn.target.id
    }
    if (btn.target.id == 'yellow') {
      document.querySelector("body").style.backgroundColor = btn.target.id
    }
    if (btn.target.id == 'green') {
      document.querySelector("body").style.backgroundColor = btn.target.id
    }
    if (btn.target.id == 'white') {
      document.querySelector("body").style.backgroundColor = btn.target.id
    }
  })
})