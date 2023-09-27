import { recipes } from "./assets/recipes.js";
import { Users } from "./assets/users.js";

console.log(recipes)
console.log(Users)

const cardContainer = document.querySelector('.cardContainer')
cardContainer.innerHTML = recipes.map((recipe) => {
    return `
      <div class="card">
        <div class="title">${recipe.title}</div>
        <ul>
          ${recipe.components.map((comp) => `<li>${comp}</li>`).join("")}
        </ul>
        <div>Zubereitung: ${recipe.time} Minuten</div>
      </div>
    `
}).join("")