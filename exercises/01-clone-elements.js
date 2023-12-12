// para clonar el elemento con todo su contenido
// const deepCopy = elem.cloneNode(true);

// para clonar el elemento sin sus elementos hijos
// const shallowCopy = elem.cloneNode(false);

const container = document.querySelector(".container");
const element = document.querySelector(".element");

const elementCopy = element.cloneNode(true);

container.append(elementCopy);
