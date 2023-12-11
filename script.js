// DOM

// 1. SELECCIÓN
// guarda los elementos de la página HTML que necesitamos para usar las constantes
const container = document.querySelector(".container");
const songsContainer = container.querySelector(".songs-container");
const addButton = container.querySelector(".input__btn_action_add");
const resetButton = container.querySelector(".input__btn_action_reset");
const noSongsElement = container.querySelector(".no-songs");

// 2. MANIPULACIÓN
// habilita el botón "Reiniciar" y oculta el texto "No hay canciones agregadas" cuando tengamos canciones en la lista de reproducción
function renderHasSongs() {
  resetButton.removeAttribute("disabled");
  resetButton.classList.remove("input__btn_disabled");
  noSongsElement.classList.add("no-songs_hidden");
}

// deshabilita el botón "Reiniciar" y muestra "No hay canciones agregadas" cuando no tengamos ninguna canción en la lista de reproducción
function renderNoSongs() {
  resetButton.setAttribute("disabled", true);
  resetButton.classList.add("input__btn_disabled");
  noSongsElement.classList.remove("no-songs_hidden");
}

// agrega el código HTML de la canción dentro del elemento songs-container
function addSong(artistValue, titleValue) {
  const trackContainer = document.createElement("div");
  trackContainer.classList.add("song");

  const artistElement = document.createElement("h4");
  artistElement.classList.add("song__artist");
  artistElement.textContent = artistValue;

  const titleElement = document.createElement("p");
  titleElement.classList.add("song__title");
  titleElement.textContent = titleValue;

  const likeButtonElement = document.createElement("button");
  likeButtonElement.classList.add("song__like");

  trackContainer.append(artistElement, titleElement, likeButtonElement);

  songsContainer.append(trackContainer);

  //   songsContainer.insertAdjacentHTML(
  //     "beforeend",
  //     `
  //   <div class="song">
  // <img
  //   src="https://invalid_url"
  //   onerror="alerta('pero sobre todo, samy es mi héroe')"
  // />
  //     <h4 class="song__artist">${
  //       artistValue /* estos son datos del usuario */
  //     }</h4>
  //     <p class="song__title">${
  //       titleValue /* estos también son datos del usuario */
  //     }</p>
  //     <button class="song__like"></button>
  //   </div>
  // `
  //   );
}

// guarda el artista y el título de las entradas en variables haciendo clic en el botón "Agregar"
addButton.addEventListener("click", function () {
  console.log("hola mundo");
  const artist = document.querySelector(".input__text_type_artist");
  console.log(artist);
  const title = document.querySelector(".input__text_type_title");

  // código JS para ejecutar al cargar la página
  console.log(artist.value);
  console.log(title.value);

  addSong(artist.value, title.value);
  renderHasSongs();
  artist.value = "";
  title.value = "";
});
