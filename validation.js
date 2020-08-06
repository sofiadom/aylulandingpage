const form = document.querySelector("#info")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const mensaje = document.querySelector("#mensaje")
const nameHelp = document.querySelector("#nameHelp")
const emailHelp = document.querySelector("#emailHelp")
const mensajeHelp = document.querySelector("#mensajeHelp")

form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (email.value === "" || mensaje.value === "") {
	emailHelp.innerText = "La información no es válida, vuelve a intentarlo."}
		if (name.value === "" || mensaje.value === "") {
	nameHelp.innerText = "La información no es válida, vuelve a intentarlo."}
		if (mensaje.value === "" || name.value === "") {
	mensajeHelp.innerText = "Si dejas este espacio en blanco no podrás enviarnos el mensaje ¡Intentá de nuevo!"}
	else {
	form.submit () 
}
})