/* ANIMAÇÃO INICIAL */
const text = document.querySelector('.myName');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

// for(let i=0; i < splitText.length; i++){
//   text.innerHTML += `<span class="webDevFinal">` + splitText[i] + "</span>"
// }

splitText.forEach( (element,index) => {
  text.innerHTML += `<span class="webDevFinal">` + splitText[index] + "</span>"
})

let char = 0;
let timer = setInterval(onTick, 70)

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}

/* THEME SWITCH */
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#checkbox__themeSwitch');

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  document.querySelector('#checkbox__themeSwitch').checked = true;
  localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  document.querySelector('#checkbox__themeSwitch').checked = false;
  localStorage.setItem("darkMode", null);
}

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('change', () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  }else{
    disableDarkMode();
  }
})