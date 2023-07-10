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
  let user = JSON.parse(localStorage.getItem("user"));

  if (user == undefined && window.location.pathname != "/register.html") {
    window.location.replace("index.html");
  }

  if ($("#menu-admin")[0] != undefined) {
    $("#profile-name")[0].innerHTML = user.nome;
    $("#profile-salutation")[0].innerHTML = `Olá, ${user.nome}!`;
    switch (type) {
      case "student":
        $("#profile-type")[0].innerHTML = "Estudante";
        $("#profile-avatar")[0].src = "assets/images/faces/3.jpg";
        break;
      default:
        $("#menu-admin")[0].classList.remove("d-none");
        break;
    }
  }

  if (window.location.pathname != "/edit_notice.html") {
    window.localStorage.removeItem("id_notice");
  }
});
