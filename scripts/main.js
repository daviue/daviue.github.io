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





/* const chk = document.getElementById('checkbox__themeSwitch');

chk.addEventListener('change', () => {
	document.body.classList.toggle('darkmode');
}); */








let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.getElementById('checkbox__themeSwitch');

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  document.getElementById('checkbox__themeSwitch').checked = true;
  localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  document.getElementById('checkbox__themeSwitch').checked = false;
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