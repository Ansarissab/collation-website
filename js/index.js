document.querySelector("#mountain1-btn").addEventListener("click", function () {
  toggleClasses(1, 2);
});

document.querySelector("#mountain2-btn").addEventListener("click", function () {
  toggleClasses(2, 1);
});

function toggleClasses(self_id, opponent_id) {
  document.querySelector(`.mountain${self_id}`).classList.add("shown");
  document.querySelector(`.mountain${self_id}`).classList.remove("hidden");

  document.querySelector(`.mountain${opponent_id}`).classList.remove("shown");
  document.querySelector(`.mountain${opponent_id}`).classList.add("hidden");

  document
    .querySelector(`#mountain${self_id}-btn`)
    .parentElement.classList.add("active");

  document
    .querySelector(`#mountain${opponent_id}-btn`)
    .parentElement.classList.remove("active");
}
