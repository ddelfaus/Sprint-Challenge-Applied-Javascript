// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container');

axios

    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response)
        
        console.log(response.data.articles);
        const listArticles = response.data.articles;
        for (topic in listArticles){
            console.log(topic);

            listArticles[topic].forEach(articles => {
                cardsContainer.appendChild(createArticle(articles))
            })
        }
      
    })

      .catch(error => {
    console.log("The data was not returned", error);
    });


    
    
    
    
function createArticle(articles){

    //elements

    const card = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');


    // classes

    card.classList.add('card');
    title.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');


    // content
    
    title.textContent = articles.headline;
    
    img.src = articles.authorPhoto;
    name.textContent= articles.authorName;


    // adding to card

    card.appendChild(title);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(name);


    return card;
        
    }

