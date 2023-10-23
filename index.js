

// function createArticles() {

//     fetch('http://localhost:5678/api/works'), {
//         headers: {
//             method: "GET"
//         }
//     }.then((response) => {
//         console.log(response)
//     })

// }           

const articles = fetch('http://localhost:5678/api/works');
console.log(articles)

