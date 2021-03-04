const text = document.querySelector('.webDev');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i < splitText.length; i++){
  text.innerHTML += `<span class="webDevFinal">` + splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 70)

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char == splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}