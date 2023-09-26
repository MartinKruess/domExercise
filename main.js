import {rezeptDaten} from './rezepte.js';
import {users} from './users.js';

//Rezepte
const section = document.querySelector('section');

section.innerHTML = rezeptDaten.map(rezept => {
    return `
    <div class="card">
        <h2>${rezept.name}</h2>
    </div> `
}).join('');



//User
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const userInput = event.currentTarget.elements.username.value;
    const pwInput = event.currentTarget.elements.password.value;
    let user = {};
    user = users.find(user => user.username = userInput);
    
    if(user.password === pwInput){
        const main = document.querySelector('main');
        const p = document.createElement('p');
        p.innerText = `Hallo ${user.username}`;
        form.innerHTML = `<button id="logout">Logout!</button>`;
        main.append(p);
        const button = document.querySelector('#logout');
        button.addEventListener('click', event => {
            user = {};
            form.innerHTML = `
            <label for="username">Username:</label>
            <input type="text" name="username" id="username">
            <label for="password">Password:</label>
            <input type="password" name="password" id="password">
            <button>Login!</button>`
            p.innerText = '';
        })
    }
})