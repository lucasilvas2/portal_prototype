$(document).ready(function () {
  let type = localStorage.getItem("type_perfil");
  console.log(type);

  switch (type) {
    case "student":
      $("#profile-name")[0].innerHTML = "Maria Silva";
      $("#profile-type")[0].innerHTML = "Estudante";
      $("#profile-avatar")[0].src = "assets/images/faces/3.jpg";
      $("#profile-salutation")[0].innerHTML = "Olá, Maria!";
      break;
    default:
      $("#menu-admin")[0].classList.remove("d-none");
      break;
  }
});
