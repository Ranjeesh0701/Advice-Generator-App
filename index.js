const randomBtn = document.querySelector(".random-container");
const advice = document.querySelector("#advice");
const adviceId = document.querySelector("#advice-id");
const dice = document.querySelector("#dice");

randomBtn.addEventListener("click", async () => {
  await fetch("https://api.adviceslip.com/advice")
    .then((data) => data.json())
    .then((res) => {
      advice.innerHTML = res.slip.advice;
      adviceId.innerHTML = res.slip.id;
      if (
        dice.style.transform === "rotate(0deg)" ||
        dice.style.transform === ""
      ) {
        dice.style.transform = "rotate(360deg)";
      } else {
        dice.style.transform = "rotate(0deg)";
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
