function greetuser(){
  const name=document.getElementById("nameinput").value;
  document.getElementById("output").innerText=`welcome, ${name}!`;
}