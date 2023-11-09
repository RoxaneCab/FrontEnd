
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

                const id = element.categoryId;
                console.log(id)
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
                console.log(event.target)
                // categoryIdValue = category.name;
                // console.log(categoryIdValue);
                // if (categoryIdValue = id)
                // if (category.id === id) {

                // }

                //     const btn1 = document.querySelector(".bton")
                //     btnTous.addEventListener("click", function() {
                //        displayProjects(data)
                //     })

                //     const btn2 = document.querySelector(".bton")
                //     btnTous.addEventListener("click", function() {
                //         displayProjects(data)
                //      })

                //     const btn3 = document.querySelector(".bton")
                //     btnTous.addEventListener("click", function() {
                //         displayProjects(data)
                //      }) 

                //     const btn4 = document.querySelector(".bton")
                //         btnTous.addEventListener("click", function() {
                //        displayProjects(data)
                //     })




            })
        })

    })






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



