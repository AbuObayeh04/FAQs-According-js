// variables for catch the according-containers => array
let accordion = document.getElementsByClassName("according-container");

// loop to loop on elements to change the classNames
for (let i = 0; i < accordion.length; ++i) {
  accordion[i].addEventListener("click", function () {
    accordion[i].classList.toggle("active");
  });
}
