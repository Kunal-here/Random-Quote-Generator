let quoteText = document.querySelector(".quote");
let btn = document.querySelector("button");
let author = document.querySelector(".name");
let copyBtn = document.querySelector(".copy")
let soundBtn = document.querySelector(".sound")


function randomQuote(){
    btn.innerText = "Loading..."
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        // console.log(result);
        quoteText.innerText = result.content;
        author.innerText = result.author;
        btn.innerText = "New Quote";
    })
}





copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
})

soundBtn.addEventListener("click", ()=>{
   let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerText}`);
   speechSynthesis.speak(utterance);
})


btn.addEventListener("click", randomQuote);
randomQuote();





