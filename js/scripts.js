function checkAge() {
  age = document.getElementById("age").value;
  if (age >= 18) {
    document.querySelector("div#adult").removeAttribute("class");
  } else {
    document.querySelector("div#minor").removeAttribute("class");
  }
}

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    checkAge();
    event.preventDefault();
  }
}