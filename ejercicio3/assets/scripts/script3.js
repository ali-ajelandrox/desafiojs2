const btn = document.querySelector("button");

const selects = document.querySelectorAll("select");

const paragraphMessage = document.querySelector("#message");

btn.addEventListener("click", () => {
  const [{ value: boton1 }, { value: boton2 }, { value: boton3 }] = selects;

  const password = boton1 + boton2 + boton3;

  let message = "passwor 1 correcto";
  let message2 = "passwor 2 correcto";
  let invalid = " password incorrecto";

  if (password == "911") {
    paragraphMessage.innerHTML = message;
    console.log("passwor 1 correct");
  } else if (password == "714") {
    paragraphMessage.innerHTML = message2;
  } else {
    paragraphMessage.innerHTML = invalid;
  }
});
