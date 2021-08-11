//563492ad6f91700001000001ac80369c68314994b36da40f5a0e98b0
const getPictures = function () {
    fetch("https://api.pexels.com/v1/search?query=people", {
        "method": "GET",
        "headers": {Authorization: '563492ad6f91700001000001ac80369c68314994b36da40f5a0e98b0'}

    })
    .then((response) => {
        console.log(response, 'hey yo!') 

        return response.json() // ✨ return ✨

    })
    .then(jsonResponse=> {
        console.log(jsonResponse)
        
        let parentDiv = document.querySelector(".container .row")
        for (let photos of jsonResponse.photos){ 
            parentDiv.innerHTML += `
            
            <div class="card mb-4 shadow-sm">       
              <img src=${photos.src.landscape}>
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          
            `
            console.log(photos.src.landscape)
        }
    })
} 


