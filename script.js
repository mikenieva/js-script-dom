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
// A. DECLARACIÓN DE FUNCIONES
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
  const songsTemplate = document.querySelector("#song-template");
}

// B. EVENTOS
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

resetButton.addEventListener("click", function () {
  const songs = document.querySelectorAll(".song");

  // 1. BORRAR TODAS LAS CANCIONES AGREGADAS
  songs.forEach(function (song) {
    song.remove();
  });

  // 2. GENERAR UNA ETIQUETA "NO HAY CANCIONES AÑADIDAS" - TEXTCONTENT
  // noSongsElement.classList.remove("no-songs_hidden");
  // resetButton.setAttribute("disabled", true);

  // 3. CAMBIAR EL CSS DE LA ETIQUETA
  // INICIO: input__btn input__btn_action_reset input__btn_disabled
  // FIN:    input__btn input__btn_action_reset input__btn_disabled
  // resetButton.classList.add("input__btn_disabled");

  renderNoSongs();
});
