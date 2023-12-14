function imgborder() {
  const logoff13 = document.getElementById("logojs");

  const click = logoff13.classList.contains("noborder");

  if (click == false) {
    logoff13.classList.add("noborder");
  } else {
    logoff13.classList.remove("noborder");
  }
}
