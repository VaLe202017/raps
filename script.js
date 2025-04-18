//dodavanje datuma i vremena
document.getElementById("gumb").addEventListener("click", function () {
  const sada = new Date();
  const naseSada = sada.toLocaleTimeString();
  document.getElementById("vrijeme").textContent = naseSada;
});

//promijena stila
const tekst = document.getElementById("tekst");
const vece = document.getElementById("vece");

let velicina = 16;
vece.addEventListener("click", function () {
  velicina = velicina * 1.2;
  tekst.style.fontSize = velicina + "px";
});

//manipulacija teksta
document.getElementById("promj").addEventListener("click", function () {
  document.getElementById("lorem").innerHTML = "Promijena lorem ipsuma";
});

//input button
let input = document.getElementById("unos");
let ul = document.getElementById("todo");
const clear = document.getElementById("clear");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    //let but = document.createElement("button");
    let li = document.createElement("li");

    li.addEventListener("click", () => {
      li.classList.toggle("zavrseno");
    });

    ul.appendChild(li);
    //li.insertAdjacentElement("afterend", but);
    li.style = "#todo li";

    //ul.appendChild(but);

    li.textContent = input.value;
    //but.textContent = "X";
    input.value = "";
  }
});

clear.addEventListener("click", () => {
  document.getElementById("todo").innerHTML = "";
});
/*
but.addEventListener("click", () => {
  document;
});
*/
document.getElementById("loginButton").addEventListener("click", function () {
  const baza = [
    { id: 1, username: "ana", password: "1234" },
    { id: 2, username: "marko", password: "abcd" },
    { id: 3, username: "iva", password: "password" },
  ];
  const usernameInput = document.getElementById("username").value.trim();
  const passwordInput = document.getElementById("password").value.trim();
  const poruka = document.getElementById("message");

  if (usernameInput === "" || passwordInput === "") {
    poruka.style.color = "red";
    poruka.textContent = "Molimo unesite korisničko ime i lozinku.";
    return;
  }

  const korisnik = baza.find(
    (user) => user.username === usernameInput && user.password === passwordInput
  );

  if (korisnik) {
    poruka.style.color = "green";
    poruka.textContent =
      "Prijava uspješna! Dobrodošli, " + korisnik.username + "!";
  } else {
    poruka.style.color = "red";
    poruka.textContent = "Neispravno korisničko ime ili lozinka.";
  }
});
