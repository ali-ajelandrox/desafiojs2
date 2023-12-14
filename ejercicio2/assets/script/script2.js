const paragraphMessage = document.querySelector("#info");

function calcstickers() {
  const imput1 = document.getElementById("sticker1");

  const imput2 = document.getElementById("sticker2");

  const imput3 = document.getElementById("sticker3");

  const result =
    Number(imput1.value) + Number(imput2.value) + Number(imput3.value);

  let message = "Llevas demasiados stickers";
  if (result > 10) {
    paragraphMessage.innerHTML = message;
  } else {
    message = "Llevas: " + result + " Sticker";
    paragraphMessage.innerHTML = message;
  }

  total.innerHTML = result;
}
