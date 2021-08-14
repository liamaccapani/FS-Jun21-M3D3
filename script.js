/* PICTURE ALBUM EXERCISE

  Starting from the current bootstrap layout, implement as many of the following features as you can:

  First of all: 
  Register on pexels to retrieve your API key: https://www.pexels.com/api/new/

  the key, once acquired, needs to go into the headers of your HTTP request with a property of 

  {Authorization: "Bearer [YOUR API KEY]"}

  this should be enough for you to make your GET request successfully


  1) When pressing on Load Images button, load the pictures from https://api.pexels.com/v1/search?query=[your-query]
  2) When pressing on Load Seconday Images, load the pictures from https://api.pexels.com/v1/search?query=[your-secondary-query]
  3) The Edit button should be replaced with a "Hide" button. 
  4) When the hide button is pressed, the whole picture card should disappear.
  5) Replace the "9 mins" string in the card template with the ID of the Image
  6) Add in the "jumbotron" a search field. Use the value of the search field to search new images and replace the existing ones.


  [EXTRA]
  7) After every button is pressed, display an alert for 5 seconds the result of the operation (es.: 20 images loaded)
  8) Handle API errors gracefully, using alert components with the message inside
  9) Add at the bottom of the page a carousel with "forest" images loaded by another API call
  10) When the user clicks on the "VIEW" button inside the Card, open the specified image in a modal view

  [EVEN MORE EXTRA]
  11) Use the map method to create from your pexel's response object an array containing just the url strings
  12) Use filter to modify the result of the api call to filter only images from some specific authors only ( you can choose which ones)
  // YOU CAN SKIP THIS 13) Use the reduce method on the results array to sum up all the id numbers in a single one



  [HINT]
  You can replace the images src for making your pictures appear on button click or you can use template literals to re-create all the cards from scratch.
  Use arrow functions to practice them

  API Docs: 

  Documentation for authenticating to the pexels APIs: https://www.pexels.com/api/documentation/?language=javascript#authorization
  Documentation for the search endpoint: https://www.pexels.com/api/documentation/?language=javascript#photos-search
*/


/* Useful:
 * `https://api.pexels.com/v1/search?query=${query}`
 * 563492ad6f91700001000001ac80369c68314994b36da40f5a0e98b0
 */


// Global variables 🌍 //
const loadImages = document.getElementById('load-btn')
const loadSecondary = document.getElementById('load-secondary-btn')
const row = document.querySelector('.album .row')


///////////////////////////////////////////////////////////////////////

window.onload = () => {
  loadImages.addEventListener('click', () => searchPhotos('colorful')) // ✨✨✨✨ () => 
  loadSecondary.addEventListener('click', () => searchPhotos('puppy'))
}


//Fetches && displays
function searchPhotos (query){
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer 563492ad6f91700001000001ac80369c68314994b36da40f5a0e98b0'
    }
  })
  .then(response => response.json())
  .then(jsonData => {
    displayPhotos(jsonData) //object
  })
  .catch(error => console.log(error))
}

//Creates card
/* 📌 If we set row.innerHTML as blank we can then proceed to add the divs of the cards inside. When we click on another button, function is executed again and first thing first sets innerHTMl to blank (reset)
* =>  with this structure we get a 'fresh' page for every button */
function displayPhotos (objectData){
  row.innerHTML = ''
  objectData.photos.forEach(photo => {
    const card = `
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src=${photo.src.landscape} alt="picture" />

        <div class="card-body">
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Hide
              </button>
            </div>
            <small class="text-muted">id: ${photo.id}</small>
          </div>
        </div>
      </div>
    </div>
    `;
    row.innerHTML += card // ✨✨✨✨ no appendChild
  });
}


// 📌 we deleted the structure from HTML and added the card dynamically with JavaScript. 
// =>  with this structure we get images of 'load images' and 'load secondary' loaded down in the same page (there is nothing settin the row.innerHTML to blank, or resetting it)

// const displayPhotos = function (objectData) { //✨✨✨✨
//   for (let photo of objectData.photos) {
//     row.innerHTML += `
//         <div class="col-md-4">
//             <div class="card mb-4 shadow-sm">
//                 <img src=${photo.src.landscape} alt="picture">

//                 <div class="card-body">
//                     <p class="card-text">
//                         This is a wider card with supporting text below as a natural
//                         lead-in to additional content. This content is a little bit
//                         longer.
//                     </p>
//                     <div class="d-flex justify-content-between align-items-center">
//                         <div class="btn-group">
//                         <button type="button" class="btn btn-sm btn-outline-secondary">
//                             View
//                         </button>
//                         <button type="button" class="btn btn-sm btn-outline-secondary">
//                             Hide
//                         </button>
//                         </div>
//                         <small class="text-muted">id: ${photo.id}</small>
//                     </div>
//                 </div>
//             </div>
//         </div> <!--div col-->
//         `;
//   }
// };

//remove/ hide pics of getphotos()
