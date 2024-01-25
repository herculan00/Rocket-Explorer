const btnToggle = document.querySelector("#toggle-mode")
let darkMode = true;


btnToggle.onclick = handleMode

function handleMode(event){

    const mode = darkMode ? "light" : "dark"  

    event.currentTarget.querySelector("span").innerText = `${mode} mode ativado!`


    document.documentElement.classList.toggle('light')

    darkMode = !darkMode 
}

