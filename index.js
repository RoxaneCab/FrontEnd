
// Récupérer les "works" et les afficher

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
        });
        
    })
}

createWorks()




fetch('http://localhost:5678/api/categories')
.then(response => response.json())
.then(categories => {
    const filterButton = document.querySelector('.filter-buttons');
})

// map pour structure html de chaque cat
const buttonHtml = categories.map(category => {
    return
    `<button class="filter">${category.name}</button>;`
}).join('')

//  Bouton "Tous" en 1er
const allButtonHtml = `<button class="filter filter-selected>Tous</button> `

// Crée la structure de tous les boutons (Tous + autre cat plus haut)
const filterButtonHtml = allButtonHtml + buttonHtml



//   // Catégories TRY 1

//   const urlCategories = 'http://localhost:5678/api/categories' 

//   function fetchCategories() {
//   fetch(urlCategories)
//     .then(function (res) {
//         return res.json()
//     })
// }

// fetchCategories()

//     // Boutons

//     const btnTous = document.querySelector(".bton-tous")
//     btnTous.addEventListener("click", function() {
//        displayProjects(data)
//     })

//     const btnObjets = document.querySelector(".bton-objets")
//     btnTous.addEventListener("click", function() {
//         displayProjects(data)
//      })

//     const btnAppart = document.querySelector(".bton-appart")
//     btnTous.addEventListener("click", function() {
//         displayProjects(data)
//      }) 

//     const btnHotel = document.querySelector(".bton-hotel")
//         btnTous.addEventListener("click", function() {
//        displayProjects(data)
//     })

