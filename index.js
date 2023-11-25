
/* 1_ RETRIEVE WORKS IN BACK, AND DISPLAY THEM */

const url = 'http://localhost:5678/api/works'
const container = document.getElementsByClassName("gallery")

function createWorks() {
    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (works) {

            works.forEach(element => {

                let figure = document.createElement('figure')

                let figcaption = document.createElement('figcaption')
                figcaption.innerHTML = element.title

                let img = document.createElement('img')
                img.src = element.imageUrl

                figure.appendChild(img)
                figure.appendChild(figcaption)

                let gallery = document.querySelector('.gallery')

                gallery.appendChild(figure)

                figure.dataset.categoryId = element.categoryId;

                figure.classList.add('work')
            });

        })
}

createWorks()

/* 2_ BUTTONS CREATION */

fetch('http://localhost:5678/api/categories')
    .then(response => response.json())
    .then(categories => {

        const filterButton = document.querySelector('.filter-button');
        console.log(categories)

        let tousButton = document.createElement('button')
        tousButton.innerHTML = "Tous"
        filterButton.appendChild(tousButton)


        categories.forEach((category) => {
            let button = document.createElement('button')
            button.innerHTML = category.name
            filterButton.appendChild(button)

            // association

            button.dataset.id = category.id

            button.addEventListener('click', (event) => {

                let works = document.querySelectorAll('.work')

                works.forEach((work) => {

                    if (work.dataset.categoryId == event.target.dataset.id) {
                        work.style.display = "block"
                    } else {
                        work.style.display = "none"
                    }
                })
            })
        })
    })


// 3. EVENT AU CLIC SUR LE BOUTON SE CONNECTER
const form = document.querySelector('login-form')

form.addEventListener("click", (e) => {
    e.preventDefault();

    const data = {
        email: e.target.email.value,
        password: e.target.password.value
    }

    fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            sessionStorage.setItem("Token", data.token);

            if (data.message || data.error) {
                // erreurMessage.style.display = "block";
                // setTimeout(() => {
                //     erreurMessage.style.display = "none";
                // }, 5000);
            } else {
                sessionStorage.setItem("isConnected", JSON.stringify(true));
                window.location.replace("index.html");
            }
        })
});









/* BUTTONS, old ideas */

/* OLD ONE, WORKS BUT IS NOT OPTIMAL */

// fetch('http://localhost:5678/api/categories')
// .then(response => response.json())
// .then(categories => {
//     const filterButton = document.querySelector('.filter-buttons');
// })

// // map pour structure html de chaque cat
// const buttonHtml = categories.map(category => {
//     return `<button class="filter">${category.name}</button>;`
// }).join('')

// //  Bouton "Tous" en 1er
// const allButtonHtml = `<button class="filter filter-selected>Tous</button> `

// // Crée la structure de tous les boutons (Tous + autre cat plus haut)
// const filterButtonHtml = allButtonHtml + buttonHtml

// // innerHTML pour mettre à jour le contenu de la div filter-buttons
// filterButton.innerHTML = filterButtonHtml

// // Recupere tous les boutons de filtres
// const buttons = document.querySelectorAll('.filter-buttons button')

/* FIRST TRY 1 AND IDEAS */
//   const urlCategories = 'http://localhost:5678/api/categories'

//   function fetchCategories() {
//   fetch(urlCategories)
//     .then(function (res) {
//         return res.json()
//     })
// }

// fetchCategories()

//     // Boutons



