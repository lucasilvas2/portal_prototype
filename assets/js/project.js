const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

$(document).ready(function () {
  let type = localStorage.getItem("type_perfil");
  if ($("#menu-admin")[0] != undefined) {
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
  }
});
