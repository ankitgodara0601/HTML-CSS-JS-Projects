const conatiner = document.querySelector(".container"),
    userResult = document.querySelector(".user_result"),
    cpuResult = document.querySelector(".cpu_result"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index)=>{
    image.addEventListener("click", (e)=>{
        image.classList.add("active");

        optionImages.forEach((image2, index2)=>{
            index !== index2 && image2.classList.remove("active");

         })

         let imageSrc = e.target.querySelector("img").src;
         userResult.querySelector('img').src = imageSrc;

         let rand = Math.floor(Math.random()*3);
         let cpuImages = ["./Images/Rock.png", "./Images/Paper.png", "./Images/Scissor.png"];

         cpuResult.querySelector("img").src = cpuImages[rand];
         let cpuValue = ["R", "P", "S"][rand];
         let userValue = ["R", "P", "S"][index];

         let outcomes ={
            RR : "Draw",
            RP : "Cpu",
            RS : "User",
            PP : "Draw",
            PR : "User",
            PS : "Cpu",
            SS : "Draw",
            SR : "Cpu",
            SP : "User",
         }

         let outcomeValue = outcomes[userValue+cpuValue];
        
         result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won!!`;
        })
})
    