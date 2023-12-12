# Templates

Guía para templates.

```javascript
const userTemplate = document.querySelector("#usuario").content;
const usersOnline = document.querySelector(".users-online");

// clona el contenido de la etiqueta template
const userElement = userTemplate.querySelector(".user").cloneNode(true);

// añade el contenido
userElement.querySelector(".user__avatar").src = "tinyurl.com/v4pfzwy";
userElement.querySelector(".user__name").textContent =
  "Duke, mayor of Cormorant";

// haz que aparezca en la página
usersOnline.append(userElement);
```
