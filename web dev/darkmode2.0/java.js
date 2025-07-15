const togglebtn=document.getElementById("toggle-btn");
if(localStorage.getItem("mode")=="dark"){
  document.body.classList.add("dark-mode");//“If body has dark-mode class → remove it.
  //If it doesn’t → add it.”
  //It’s like a light switch.
  togglebtn.innerText="🌑"
}
togglebtn.addEventListener("click",() =>{//When this button is clicked, run this function.”
  document.body.classList.toggle("dark-mode");
  const isDark=document.body.classList.contains("dark-mode");
  togglebtn.innerText= isDark ?"🌑":"☀️";//its a ternary used for if dark show this emoji if light show this emoji
  localStorage.setItem("mode",isDark ? "dark":"light");//It’s like a lil notepad your browser keeps. It stores info even after you close the tab.
});