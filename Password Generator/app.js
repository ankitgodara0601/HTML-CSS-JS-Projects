const inputText = document.querySelector(".text-area input"),
  copyIcon = document.querySelector(".text-area i"),
  rangeSlider = document.querySelector(".range-box .slider"),
  sliderNum = document.querySelector(".range-box .slider-no"),
  passButton = document.querySelector(".pass-button");

const passGenerator = () => {
    let num = parseInt(rangeSlider.value);
  let pass = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$!%&";

  for (let i = 0; i < num; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  inputText.value = pass;
  
  copyIcon.classList.value = "fa-regular fa-copy";
};

rangeSlider.addEventListener("input", ()=>{
    sliderNum.innerText = rangeSlider.value;
    passGenerator();
})

copyIcon.addEventListener("click", ()=>{
    navigator.clipboard.writeText(inputText.value);
    copyIcon.classList.value = "fa-solid fa-check";
})

passGenerator();

rangeSlider.addEventListener('input', passGenerator);

passButton.addEventListener('click', passGenerator);
