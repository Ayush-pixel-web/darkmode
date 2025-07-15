function toggledarkmode(){
  document.body.classList.toggle("dark-mode");//document is like the body go to the body part of the page
  const btn=document.getElementById("modebtn");//class list is like the tag in the html to track the tag from the html code like dark mode
  if(document.body.classList.contains("dark-mode")){//amd toggle is basically used for change the theme from dark mode to light mode
    btn.innerText="Toggle Light Mode";//and contains basically check for like it have the dark mode if yes the this condition or else the false statement block
  }//btn is a normal const var used to check for wheather it is 
  else{
    btn.innerText="Toggle Dark Mode";
  }
}//in simple go to the body tag and either add or remove the dark mode class depending on whether its already there