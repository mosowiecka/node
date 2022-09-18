// FRONT
//alert("Hello World");

document.getElementById("btn").addEventListener("click", function () {
  const val = document.getElementById("inputVal").value;
  console.log(val);
  document.getElementById("wypiszDane").innerText = val;

  
});
